import GlazeEdits from "../components/GlazeEdits.js";
import AddGlaze from "../components/AddGlaze.js";
import "../css/EditGlazes.css";
import "../css/AddGlaze.css";
import React, {useState} from "react";

const EditGlazes = () => {
    const [showAddGlaze, setShowAddGlaze] = useState(false);
    const [glazeEdits, setGlazeEdits] = useState([]);
    const getMaxIdx = () => {
        let max = -1;
        glazeEdits.forEach((i) => {
            max = i._id > max ? i._id : max;
        });
        return max;
    };
    const showNewRecipe = (recipe) => {
        setGlazeEdits((vals)=>[...vals, recipe]);
    };
    return (
        <div id="remaining-content" className="remaining-content columns center-columns-horizontal">
            <div id="left-pane-about" className="one">
                <div className="edit-glaze-button">
                    {!showAddGlaze && <a href="#" onClick={() => {setShowAddGlaze(true)}}><h3>Add a Glaze</h3></a>}
                </div>
                {showAddGlaze && <AddGlaze setShow={setShowAddGlaze} getMaxIdx={getMaxIdx} showNewRecipe={showNewRecipe}/>}
            </div>
            <div id="remaining-content-child" className="columns-all three center-columns-horizontal  wrap">
                <GlazeEdits glazeEdits={glazeEdits} setGlazeEdits={setGlazeEdits} />
            </div>
        </div>
    );
};

export default EditGlazes
