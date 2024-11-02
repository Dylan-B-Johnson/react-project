import {Outlet, Link} from "react-router-dom";
import React, { useEffect, useState } from 'react';
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import Footer from "../components/Footer";
const Layout = () => {
    const [showMobileNav, setShowMobileNav] = useState(false);

    const hamburgerOnClick = () => {
        setShowMobileNav(!showMobileNav);
    };

    return (
        <>
            <Header hamburgerOnClick={hamburgerOnClick}/>
            <div id="main-content">
                <MobileHeader showMobileNav={showMobileNav}/>
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default Layout;
