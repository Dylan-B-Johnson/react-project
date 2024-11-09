import "../css/MainNav.css";
import {Link} from "react-router-dom";

const MainNav = () => {
  return (
    <nav id="main-nav" className="relative desktop">
        <ul>
            <div className="columns center-columns" id="main-nav-main-div">
                <li><Link to="/about"><h2>About</h2></Link></li>
                <li><Link to="/gallery"><h2>Gallery</h2></Link></li>
                <li><Link to="/glazes"><h2>Glazes</h2></Link></li>
                <li id="dropdown-container">
                    <a id="edit"><h2>Edit</h2></a>
                    <div id="edit-dropdown" className="dropdown">
                        <div className="edit-div"><Link to="/edit-about"><h2>About</h2></Link></div>
                        <div className="edit-div"><Link to="/edit-gallery"><h2>Gallery</h2></Link></div>
                        <div className="edit-div"><Link to="/edit-glazes"><h2>Glazes</h2></Link></div>
                        <div className="edit-div"><Link to="/edit-users"><h2>Users</h2></Link></div>
                    </div>
                </li>
            </div>
        </ul>
    </nav>
  );
};

export default MainNav;