import "../css/header.css";
// This lets us make a script run after loading the content (putting at bottom of index.html won't work for react)
import React, { useEffect } from 'react';

const Header = () => {
    // this will run after this component has loaded completely
    useEffect(() => {
            const hamburgerWork = () => {
                document.getElementById("mobile-main-nav").classList.toggle("hide"); 
            };
            document.getElementById("hamburger").onclick = hamburgerWork;
        }, 
        []
    );
    return (
        <nav id="mobile-main-nav" class="hide mobile">
            <ul>
                <li><a href="index.html"><h2 class="link">About</h2></a></li>
                <li><a href="gallery.html"><h2 class="link">Gallery</h2></a></li>
                <li><a href="glazes.html"><h2 class="link">Glazes</h2></a></li>
                <li><a href="edit-about.html"><h2 class="link">Edit About</h2></a></li>
                <li><a href="edit-gallery.html"><h2 class="link">Edit Gallery</h2></a></li>
                <li><a href="edit-glazes.html"><h2 class="link">Edit Glazes</h2></a></li>
                <li><a href="edit-users.html"><h2 class="link">Edit Users</h2></a></li>
            </ul>
        </nav>
    );
};

export default Header;
