const EditAbout = () => {
    return (
        <div id="remaining-content" className="columns center-columns-horizontal">
            <div id="left-pane-about" className="one">
                <p>Replace CV:</p>
                <div id="download-cv">
                    <a href="#"><h3>&#128190; Save Changes</h3></a>
                </div>
            </div>
            <div className="three" id="artist-statement">
                <img id="about-art" className="contain-img" src="images/about-art.png"/>
                <h3>Artist's Statement</h3>
            </div>
        </div>
    );
};

export default EditAbout
