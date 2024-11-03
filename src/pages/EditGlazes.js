import GlazeEdits from "../components/GlazeEdits.js";
import "../css/EditGlazes.css";

const EditGlazes = () => {
    return (
        <div id="remaining-content" class="remaining-content columns center-columns-horizontal">
            <div id="left-pane-about" class="one">
                <div id="add-button" class="delete-button">
                    <a href="#"><h3>Add</h3></a>
                </div>
                <div id="download-cv">
                    <a href="#"><h3>&#128190; Save Changes</h3></a>
                </div>
            </div>
            <div id="remaining-content-child" class="columns-all three center-columns-horizontal  wrap">
                <GlazeEdits />
            </div>
        </div>
    );
};

export default EditGlazes
