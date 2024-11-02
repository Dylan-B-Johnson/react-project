import "../css/MobileHeader.css";
import React, { useEffect, useState } from 'react';
const Header = ({showMobileNav}) => {
    // this will run after this component has loaded completely
    return (
        <nav id="mobile-main-nav" className={showMobileNav ? "mobile" : "hide mobile"}>
            <ul>
                <li><a href="index.html"><h2 className="link">About</h2></a></li>
                <li><a href="gallery.html"><h2 className="link">Gallery</h2></a></li>
                <li><a href="glazes.html"><h2 className="link">Glazes</h2></a></li>
                <li><a href="edit-about.html"><h2 className="link">Edit About</h2></a></li>
                <li><a href="edit-gallery.html"><h2 className="link">Edit Gallery</h2></a></li>
                <li><a href="edit-glazes.html"><h2 className="link">Edit Glazes</h2></a></li>
                <li><a href="edit-users.html"><h2 className="link">Edit Users</h2></a></li>
            </ul>
        </nav>
    );
};

export default Header;
