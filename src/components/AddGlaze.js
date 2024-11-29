import Ingredient from "./Ingredient.js";
import {backend, api} from "./API";
import React, { useState } from "react";
import "../css/AddGlaze.css";

const AddGlaze = ({setShow, showNewRecipe, getMaxIdx}) => {
  const [inputs, setInputs] = useState({"materials": [], "amounts": []});
  const [materials, setMaterials] = useState([0]);
  const [result, setResult] = useState("");

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

  const addToServer = async (e) => {
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
    fixedJSON._id = getMaxIdx() + 1;
    const response = await fetch(api + "/recipes" ,{
      method:"POST",
      body:formData
    });
    if(response.status == 200){
      setResult("Recipe successfully uploaded.");
      showNewRecipe(await response.json());
      e.target.reset();
      setShow(false);
    } else {
      setResult("Unable to upload recipe.");
    }
  };

  const handleImageChange = (e) => {
    setInputs((vals) => ({...vals, [e.target.name]: e.target.files[0]}));
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
      <form id="add-glaze-form" onSubmit={addToServer}>
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
          {inputs.image != null && <img id="recipe-add-img-prev" alt="" src={inputs.image != null ? URL.createObjectURL(inputs.image) : ""}/>}
        </div>
        <div>
          <label htmlFor="recipe-add-img">Upload Image:</label>
          <input type="file" id="recipe-add-img" name="image" accept="image/*" required onChange={handleImageChange}/>
        </div>
        <div className="edit-glaze-button">
          <a href="#" onClick={addIngredient}><h3>Add Ingredient</h3></a>
          {materials.length > 1 && <a href="#" onClick={removeIngredient}><h3>Remove Ingredient</h3></a>}
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
          <button type="submit">Upload Recipe</button>
        </div>
        <p>{result}</p>
      </form>
    </div>
  );
};

export default AddGlaze;
