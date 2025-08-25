import Navbar from "@/Components/Navbar.jsx";
import Footer from "@/Pages/Footer.jsx";
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
