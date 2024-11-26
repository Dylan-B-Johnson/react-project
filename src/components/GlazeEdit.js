import {useState, useEffect } from "react";
import {backend, api} from "./API";
import "../css/Glaze.css";

const GlazeEdit = ({_id, image, recipe, name, link, credit, cone, 
    setOnYes, setShowModal, setGlazeEdits, glazeEdits}) => {
  const deleteString = `delete${_id}`;

  const deleteRecipe = async(id) => {
    const response = await fetch(api + `/recipes/${id}`, {
      method: "DELETE"
    });
    if (response.status === 200) {
      setGlazeEdits(glazeEdits.filter((i) => i._id != id));
      return true;
    }
    return false;
  };

  const onDelete = async(deleteStringL) => {
    setOnYes(() => (id) => { return deleteRecipe(id);});
    setShowModal(deleteStringL);
  };

  return (
    <div className="placcard placcard-glazes placcard-glazes-edit">
      <div className="mobile-div columns-mobile">
        <div className="one img-div">
          <img src={image} className="one contain"/>
        </div>
        <div className="one table-div">
          <div className="delete-button">
            <a href="#" onClick={() => {onDelete(deleteString);}}><h3>Delete</h3></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlazeEdit;
