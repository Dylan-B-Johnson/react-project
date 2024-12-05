import "../css/Header.css";
import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import MainNav from "./MainNav.js";
import Login from "./Login.js";
const Header = ({hamburgerOnClick}) => {
    return (
            <header id="main-header">
                <div id="header-child" className="columns-all">
                    <div className="fit-content">
                        <Link to="/about" className="relative"><img id="main-img" src="images/sally-brogden.png"/></Link>
                    </div>
                    <div className="fill-width">
                        <section className="relative">
                            <div id="hamburger" className="mobile" onClick={hamburgerOnClick}>
                                <div></div>
                                <div></div>
                                <div></div>
                            </div>
                            <Link to="/about" id="main-title-a" className="relative"><h1 id="main-title">Sally Brogden</h1></Link>
                        </section>
                        <MainNav />
                    </div>  
                </div>  
            </header>
    );
};

export default Header;
