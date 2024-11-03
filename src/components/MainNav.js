import "../css/MainNav.css";

const MainNav = () => {
  return (
    <nav id="main-nav" className="relative desktop">
        <ul>
            <div className="columns center-columns" id="main-nav-main-div">
                <li><a href="about"><h2>About</h2></a></li>
                <li><a href="gallery"><h2>Gallery</h2></a></li>
                <li><a href="glazes"><h2>Glazes</h2></a></li>
                <li id="dropdown-container">
                    <a id="edit"><h2>Edit</h2></a>
                    <div id="edit-dropdown" className="dropdown">
                        <div className="edit-div"><a href="edit-about"><h2>About</h2></a></div>
                        <div className="edit-div"><a href="edit-gallery"><h2>Gallery</h2></a></div>
                        <div className="edit-div"><a href="edit-glazes"><h2>Glazes</h2></a></div>
                        <div className="edit-div"><a href="edit-users"><h2>Users</h2></a></div>
                    </div>
                </li>
            </div>
        </ul>
    </nav>
  );
};

export default MainNav;
