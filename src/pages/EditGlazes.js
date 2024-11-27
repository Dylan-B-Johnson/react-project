import GlazeEdits from "../components/GlazeEdits.js";
import AddGlaze from "../components/AddGlaze.js";
import "../css/EditGlazes.css";
import "../css/AddGlaze.css";
import React, {useState} from "react";

const EditGlazes = ({setOnYes, setShowModal, glazes, setGlazes, setGlazeEditId}) => {
    const [showAddGlaze, setShowAddGlaze] = useState(false);
    const getMaxIdx = () => {
        let max = -1;
        glazes.forEach((i) => {
            max = i._id > max ? i._id : max;
        });
        return max;
    };
    const showNewRecipe = (recipe) => {
        setGlazes((vals)=>[...vals, recipe]);
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
                <GlazeEdits glazeEdits={glazes} setShowModal={setShowModal} setGlazeEdits={setGlazes} setOnYes={setOnYes} setGlazeEditId={setGlazeEditId}/>
            </div>
        </div>
    );
};

export default EditGlazes
