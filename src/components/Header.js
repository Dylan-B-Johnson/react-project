import "../css/Header.css";
import React, { useEffect, useState } from 'react';
const Header = ({hamburgerOnClick}) => {
    return (
            <header id="main-header">
                <div id="header-child" className="columns-all">
                    <div className="fit-content">
                        <a href="index.html" className="relative"><img id="main-img" src="/images/sally-brogden.png"/></a>
                    </div>
                    <div className="fill-width">
                        <section className="relative">
                            <div id="hamburger" className="mobile" onClick={hamburgerOnClick}>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <div id="login-div-mobile" className="mobile columns-all center-columns">
                                <i className="relative fa fa-user" id="person-icon"></i>
                                <p className="relative child-of-mobile-login" id="username-mobile">sbrogden</p>
                                <a href="#" className="relative child-of-mobile-login" id="logout-mobile"><p>logout</p></a>
                            </div>
                            <div id="login-div" className="desktop relative">
                                <div id="login-div-div" className="columns-all center-columns relative">
                                    <i className="relative fa fa-user" id="person-icon"></i>
                                    <p className="relative" id="username">sbrogden</p>
                                </div>
                                <a href="#" className="relative" id="logout"><p>logout</p></a>
                            </div>
                            <a href="index.html" id="main-title-a" className="relative"><h1 id="main-title">Sally Brogden</h1></a>
                        </section>
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
                    </div>  
                </div>  
            </header>
    );
};

export default Header;
