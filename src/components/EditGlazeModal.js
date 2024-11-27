import Ingredient from "./Ingredient.js";
import {backend, api} from "./API";
import React, { useState, useEffect } from "react";
import "../css/AddGlaze.css";

const EditGlazeModal = ({glazeId, glazes, setGlazes, close}) => {
  const [inputs, setInputs] = useState({"materials": [], "amounts": []});
  const [materials, setMaterials] = useState([0]);
  const [result, setResult] = useState("");
  const [imageUploaded, setImageUploaded] = useState(false);

  useEffect(() => {
    const mats = JSON.parse(JSON.stringify(inputs.materials));
    const amnts = JSON.parse(JSON.stringify(inputs.amounts));
    glazes.forEach((glaze) => {
      if (glaze._id == glazeId) {
        glaze.recipe.forEach((recipeItem) => {
          mats.push(recipeItem.material);
          amnts.push(recipeItem.amount);
        });
        setInputs((vals) => ({...vals,
          _id: glaze._id,
          name: glaze.name,
          image: glaze.image,
          link: glaze.link,
          credit: glaze.credit,
          cone: glaze.cone
        }));
        setInputs((vals) => ({...vals, materials:mats, amounts:amnts}));
        mats.forEach((mat) => {addIngredient();});
      }
    });
  },[]);


  const handleChangeMaterials = (materialNum, event) => {
    if (event.target.name == "material" + materialNum) {
      const mats = JSON.parse(JSON.stringify(inputs.materials));
      mats[materialNum] = event.target.value;
      setInputs((vals) => ({
        ...vals, materials:mats
      }));
    } else {
      const amnt = JSON.parse(JSON.stringify(inputs.amounts));
      amnt[materialNum] = event.target.value;
      setInputs((vals) => ({
        ...vals, amounts:amnt
      }));
    }
  };

  const handleChange = (event) => {
    setInputs((vals)=>({...vals,[event.target.name]:event.target.value}));
  };

  const updateGlaze = async (e) => {
    e.preventDefault();
    setResult("Uploading...");
    const formData = new FormData(e.target);
    const fixedJSON = JSON.parse(JSON.stringify(inputs));
    fixedJSON.recipe = [];
    delete fixedJSON.materials;
    delete fixedJSON.amounts;
    fixedJSON.recipe = [];
    for (let i = 0; i < inputs.materials.length; i++) {
      fixedJSON.recipe.push({"material": inputs.materials[i], "amount": inputs.amounts[i]})
    }
    fixedJSON.credit = fixedJSON.credit == null ? "" : fixedJSON.credit;
    fixedJSON.link = fixedJSON.link == null ? "" : fixedJSON.link;
    fixedJSON.image = URL.createObjectURL(inputs.image);
    const response = await fetch(api + "/recipes/" + inputs._id,{
      method:"PUT",
      body:formData
    });
    if (response.status == 200) {
      setResult("Recipe successfully updated.");
      updateLocalGlazeRecipes(await response.json());
      e.target.reset();
      close();
    } else {
      setResult("Unable to update your glaze recipe.");
    }
  };

  const updateLocalGlazeRecipes = (updatedGlaze) => {
    const newGlazes = JSON.parse(JSON.stringify(glazes));
    newGlazes.forEach((glaze) => {
      if (glaze._id == updatedGlaze._id) {
        glaze.name = updatedGlaze.name;
        glaze.cone = updatedGlaze.cone;
        glaze.link = updatedGlaze.link;
        glaze.image = updatedGlaze.image;
        glaze.credit = updatedGlaze.credit;
        glaze.recipe = updatedGlaze.recipe;
      }
    });
    setInputs(newGlazes);
  };

  const handleImageChange = (e) => {
    setInputs((vals) => ({...vals, [e.target.name]: e.target.files[0]}));
    setImageUploaded(true);
  };

  const removeIngredient = () => {
    const mats = JSON.parse(JSON.stringify(inputs.materials));
    mats[materials.length - 1] = "";
    const amnts = JSON.parse(JSON.stringify(inputs.amounts));
    amnts[materials.length - 1] = "";
    setInputs((vals) => ({
      ...vals, materials:mats, amounts:amnts
    }));
    const newMats = JSON.parse(JSON.stringify(materials));
    newMats.pop();
    setMaterials(newMats);
  };

  const addIngredient = () => {
    const lastNum = materials[materials.length - 1];
    if (lastNum == 19)
      return;
    setMaterials(materials => [...materials, lastNum + 1]);
    inputs.materials.push("");
    inputs.amounts.push("");
  };

  return (
    <div>
      <form id="add-glaze-form" onSubmit={updateGlaze}>
        <div>
          <label htmlFor="recipe-add-name">Name:</label>
        </div>
        <div>
          <input type="text" id="recipe-add-name" name="name" required value={inputs.name || ""} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="recipe-add-cone">Cone:</label>
        </div>
        <div>
          <input type="text" id="recipe-add-cone" name="cone" required value={inputs.cone || ""} onChange={handleChange}/>
        </div>
        <div>
          {inputs.image != null && <img id="recipe-add-img-prev" alt="" src={imageUploaded ? URL.createObjectURL(inputs.image) : backend + inputs.image.substring(1)}/>}
        </div>
        <div>
          <label htmlFor="recipe-add-img">Upload Image:</label>
          <input type="file" id="recipe-add-img" name="image" accept="image/*" required onChange={handleImageChange}/>
        </div>
        <div className="edit-glaze-button">
          <a href="#" onClick={addIngredient}><h3>Add Ingredient</h3></a>
          {materials.length > 1 && <a href="javascript:void(0)" onClick={removeIngredient}><h3>Remove Ingredient</h3></a>}
        </div>
        {materials.map((materialNum) => (
          <Ingredient key={materialNum} materialNum = {materialNum} inputs = {inputs} handleChange={handleChangeMaterials}/>
        ))}
        <div>
          <label htmlFor="recipe-add-credit">Credit:</label>
        </div>
        <div>
          <input type="text" id="recipe-add-credit" name="credit" value={inputs.credit || ""} onChange={handleChange}/>
        </div>
        <div>
          <label htmlFor="recipe-add-link">Attribution Link:</label>
        </div>
        <div>
          <input type="url" id="recipe-add-link" name="link" value={inputs.link || ""} onChange={handleChange}/>
        </div>
        <div>
          <button id="update-btn" type="submit">Update Glaze Recipe</button>
        </div>
        <p>{result}</p>
      </form>
    </div>
  );
};

export default EditGlazeModal;
