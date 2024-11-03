import Form from "../components/Form.js"
import "../css/LeftPane.css"

const LeftPaneAbout = () => {
    return (
        <div id="left-pane-about" className="one">
            <div id="download-cv">
                <a href="files/cv.pdf" target="_blank" download><h3>Download CV</h3></a>
            </div>
            <Form />
            <p>Office: A+A 001A</p>
            <div id="office-map">
                <iframe  src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d596.4851108471788!2d-83.92991113770258!3d35.95276483952231!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e1!3m2!1sen!2sus!4v1729353618905!5m2!1sen!2sus" width="600" height="450" style={{border:"0"}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
            </div>
        </div>
    );
};

export default LeftPaneAbout
