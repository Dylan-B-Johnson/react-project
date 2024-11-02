import ArtistStatement from "../components/ArtistStatement.js"
import LeftPaneAbout from "../components/LeftPaneAbout.js"

const About = () => {
    return (
        <div id="remaining-content" className="columns center-columns-horizontal">
            <LeftPaneAbout />
            <ArtistStatement />
        </div>
    );
};

export default About
