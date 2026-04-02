import Navbar from "@/components/Navbar.jsx";
import Footer from "@/pages/Footer.jsx";
import {Outlet} from "react-router-dom";

function MainLayout() {

    return(
        <>
            <Navbar/>
            <main>
                <Outlet></Outlet>
            </main>
            {/*<Footer/>*/}
        </>
    );
}
export default MainLayout
