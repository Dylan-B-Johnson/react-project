import EditWorks from "../components/EditWorks.js";

const EditGallery = () => {
    return (
        <div id="remaining-content" className="remaining-content columns center-columns-horizontal">
            <div id="left-pane-about" className="one">
                <p>Upload Photo</p>
                <div id="download-cv">
                    <a href="#"><h3>&#128190; Save Changes</h3></a>
                </div>
            </div>
            <div id="remaining-content-child" className="columns-all three center-columns-horizontal  wrap">
                <EditWorks />
            </div>
        </div>
    );
};

export default EditGallery
