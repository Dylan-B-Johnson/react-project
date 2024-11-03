import EditWorks from "../components/EditWorks.js";

const EditGallery = () => {
    return (
        <div id="remaining-content" class="remaining-content columns center-columns-horizontal">
            <div id="left-pane-about" class="one">
                <p>Upload Photo</p>
                <div id="download-cv">
                    <a href="#"><h3>&#128190; Save Changes</h3></a>
                </div>
            </div>
            <div id="remaining-content-child" class="columns-all three center-columns-horizontal  wrap">
                <EditWorks />
            </div>
        </div>
    );
};

export default EditGallery
