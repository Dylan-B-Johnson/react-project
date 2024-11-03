import "../css/MobileHeader.css";
import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
const Header = ({showMobileNav}) => {
    // this will run after this component has loaded completely
    return (
        <nav id="mobile-main-nav" className={showMobileNav ? "mobile" : "hide mobile"}>
            <ul>
                <li><Link to="/about"><h2 className="link">About</h2></Link></li>
                <li><Link to="/gallery"><h2 className="link">Gallery</h2></Link></li>
                <li><Link to="/glazes"><h2 className="link">Glazes</h2></Link></li>
                <li><Link to="/edit-about"><h2 className="link">Edit About</h2></Link></li>
                <li><Link to="/edit-gallery"><h2 className="link">Edit Gallery</h2></Link></li>
                <li><Link to="/edit-glazes"><h2 className="link">Edit Glazes</h2></Link></li>
                <li><Link to="/edit-users"><h2 className="link">Edit Users</h2></Link></li>
            </ul>
        </nav>
    );
};

export default Header;
