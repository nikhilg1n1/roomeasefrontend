import React from 'react'
import HomePage from "./HomePage.jsx";
import LandingPage2 from "./LandingPage2.jsx";
import LandingPage3 from "./LandingPage3.jsx";
import Footer from "./Footer.jsx";

function LandingPage() {
    return (
        <main className={"w-full flex flex-col"}>
            <HomePage/>
            <LandingPage2/>
            <LandingPage3/>
            <Footer/>
        </main>


    )
}
export default LandingPage
