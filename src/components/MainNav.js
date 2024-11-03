import "../css/MainNav.css";

const MainNav = () => {
  return (
    <nav id="main-nav" className="relative desktop">
        <ul>
            <div className="columns center-columns" id="main-nav-main-div">
                <li><a href="index.html"><h2>About</h2></a></li>
                <li><a href="gallery.html"><h2>Gallery</h2></a></li>
                <li><a href="glazes.html"><h2>Glazes</h2></a></li>
                <li id="dropdown-container">
                    <a id="edit"><h2>Edit</h2></a>
                    <div id="edit-dropdown" className="dropdown">
                        <div className="edit-div"><a href="edit-about.html"><h2>About</h2></a></div>
                        <div className="edit-div"><a href="edit-gallery.html"><h2>Gallery</h2></a></div>
                        <div className="edit-div"><a href="edit-glazes.html"><h2>Glazes</h2></a></div>
                        <div className="edit-div"><a href="edit-users.html"><h2>Users</h2></a></div>
                    </div>
                </li>
            </div>
        </ul>
    </nav>
  );
};

export default MainNav;
