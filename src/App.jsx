import LandingPage from "./Pages/LandingPage.jsx";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from "./Pages/Footer.jsx";
import ConfirmRoom from "./Pages/ListRoom.jsx";
import React from "react";
import RentRoomPage from "./Pages/RentRoomPage.jsx";
import Navbar from "@/Components/Navbar.jsx";
import {LoginForm} from "./Components/login-form.jsx";
import LoginPage from "./Pages/LoginPage.jsx";
import ListRoom from "./Pages/ListRoom.jsx";
import MainLayout from "@/Pages/MainLayout.jsx";
import AuthLayout from "@/Pages/AuthLayout.jsx";

function App() {

    return (
        <>
            <Router>
                <Routes>
                    <Route element={<MainLayout/>}>
                        <Route path="/" element={<LandingPage/>}/>
                        <Route path="/check" element={<ListRoom/>}/>
                        <Route path="/rentroom" element={<RentRoomPage/>}/>
                    </Route>

                    <Route element={<AuthLayout/>}>
                        <Route path="/login" element={<LoginPage/>}/>
                    </Route>
                </Routes>
            </Router>

        </>
    )
}

export default App
