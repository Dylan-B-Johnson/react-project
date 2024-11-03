import {useState, useEffect } from "react";
import "../css/Glaze.css";

const GlazeEdit = ({_id, image, recipe, name, link, credit, cone}) => {
  return (
    <div className="placcard placcard-glazes">
      <div className="mobile-div columns-mobile">
        <div className="one img-div">
          <img src={image} className="one contain"/>
        </div>
        <div className="one table-div">
          <div className="delete-button">
            <a href="#"><h3>Delete</h3></a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default GlazeEdit;
