import {Outlet, Link} from "react-router-dom";
import Header from "../components/Header";
import MobileHeader from "../components/MobileHeader";
import Footer from "../components/Footer";
const Layout = () => {
    return (
        <>
            <Header />
            <div id="main-content">
                <MobileHeader />
                <Outlet />
            </div>
            <Footer />
        </>
    );
};

export default Layout;
