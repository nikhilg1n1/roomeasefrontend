import React from 'react'
import HomePage from "./HomePage.jsx";
import LandingPage2 from "./LandingPage2.jsx";
import LandingPage3 from "./LandingPage3.jsx";
import Footer from "./Footer.jsx";
import Navbar from "@/Components/Navbar.jsx";

function LandingPage() {
    return (
        <div className={"w-full flex flex-col"}>
            <Navbar/>
            <HomePage/>
            <LandingPage2/>
            <LandingPage3/>
            <Footer/>
        </div>


    )
}
export default LandingPage
