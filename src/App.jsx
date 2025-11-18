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
import ProtectedRoutes from "@/Context/ProtectedRoutes.jsx";
import SuccessPage from './Pages/SuccessPage.jsx'
import RoomDescription from "@/Pages/RoomDescription.jsx";
import NotFoundPage from "@/Pages/NotFoundPage.jsx";
import ServerErrorPage from "@/Pages/ServerErrorPage.jsx";
import AuthenticationErrorPage from "@/Pages/AuthenticationErrorPage.jsx";
import AuthorizationErrorPage from "@/Pages/AuthorizationErrorPage.jsx";


function App() {

    return (
        <>
                <Routes>
                    <Route element={<MainLayout/>}>
                        <Route path="/" element={<LandingPage/>}/>
                        <Route path="/check" element={

                            <ProtectedRoutes>
                                <ListRoom/>
                            </ProtectedRoutes>
                            }/>
                        <Route path={"/success"} element={<SuccessPage/>}/>
                        <Route path={"/description/:roomId"} element={<RoomDescription/>}/>

                        <Route path="/rentroom" element={
                            <ProtectedRoutes>
                                <RentRoomPage/>
                            </ProtectedRoutes>
                            }/>
                    </Route>
                    <Route path={"/error/404"} element={<NotFoundPage/>}/>
                    <Route path={"/error/500"} element={<ServerErrorPage/>}/>
                    <Route path={"/error/auth"} element={<AuthenticationErrorPage/>}/>
                    <Route path={"/error/oauth"} element={<AuthorizationErrorPage/>}/>


                    <Route element={<AuthLayout/>}>
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/logout/:id" element={<LoginPage/>}/>
                    </Route>
                </Routes>


        </>
    )
}

export default App
