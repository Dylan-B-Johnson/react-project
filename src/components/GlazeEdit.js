import {useState, useEffect } from "react";
import {backend, api} from "./API";
import "../css/Glaze.css";

const GlazeEdit = ({_id, image, recipe, name, link, credit, cone, 
    setOnYes, setShowModal, setGlazeEdits, glazeEdits, setGlazeEditId}) => {
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

  const onEdit = () => {
    setShowModal("editGlaze");
    setGlazeEditId(_id);
  };

  return (
    <div className="placcard placcard-glazes placcard-glazes-edit">
      <p>{name}</p>
      <div className="mobile-div columns-mobile">
        <div className="one img-div">
          <img src={image} className="one contain"/>
        </div>
        <div className="one table-div">
          <p className="cone">Cone: {cone}</p>
          <table>
            <tbody>
              <tr>
                <th>Material</th>
                <th>Amount</th>
              </tr>
              {recipe.map((row) => (
                <tr key={row.material + row.amount}>
                  <td>{row.material}</td>
                  <td>{row.amount}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {credit != "" && <a target="_blank" className={link == "" ? "no-text-decor" : ""} href={link == "" ? undefined : link}>{credit}</a>}
          <div className="delete-button columns-all">
              <a href="#" onClick={() => {onDelete(deleteString);}}><h3>Delete</h3></a>
              <div className="spacer"></div>
              <a href="#" onClick={() => {onEdit()}}><h3>Edit</h3></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlazeEdit;
