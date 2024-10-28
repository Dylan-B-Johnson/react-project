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
            <header id="main-header">
                <div id="header-child" class="columns-all">
                    <div class="fit-content">
                        <a href="index.html" class="relative"><img id="main-img" src="/images/sally-brogden.png"/></a>
                    </div>
                    <div class="fill-width">
                        <section class="relative">
                            <div id="hamburger" class="mobile">
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div id="login-div-mobile" class="mobile columns-all center-columns">
                                <i class="relative fa fa-user" id="person-icon"></i>
                                <p class="relative child-of-mobile-login" id="username-mobile">sbrogden</p>
                                <a href="#" class="relative child-of-mobile-login" id="logout-mobile"><p>logout</p></a>
                            </div>
                            <div id="login-div" class="desktop relative">
                                <div id="login-div-div" class="columns-all center-columns relative">
                                    <i class="relative fa fa-user" id="person-icon"></i>
                                    <p class="relative" id="username">sbrogden</p>
                                </div>
                                <a href="#" class="relative" id="logout"><p>logout</p></a>
                            </div>
                            <a href="index.html" id="main-title-a" class="relative"><h1 id="main-title">Sally Brogden</h1></a>
                        </section>
                        <nav id="main-nav" class="relative desktop">
                            <ul>
                                <div class="columns center-columns" id="main-nav-main-div">
                                    <li><a href="index.html"><h2>About</h2></a></li>
                                    <li><a href="gallery.html"><h2>Gallery</h2></a></li>
                                    <li><a href="glazes.html"><h2>Glazes</h2></a></li>
                                    <li id="dropdown-container">
                                        <a id="edit"><h2>Edit</h2></a>
                                        <div id="edit-dropdown" class="dropdown">
                                            <div class="edit-div"><a href="edit-about.html"><h2>About</h2></a></div>
                                            <div class="edit-div"><a href="edit-gallery.html"><h2>Gallery</h2></a></div>
                                            <div class="edit-div"><a href="edit-glazes.html"><h2>Glazes</h2></a></div>
                                            <div class="edit-div"><a href="edit-users.html"><h2>Users</h2></a></div>
                                        </div>
                                    </li>
                                </div>
                            </ul>
                        </nav>
                    </div>  
                </div>  
            </header>
    );
};

export default Header;
