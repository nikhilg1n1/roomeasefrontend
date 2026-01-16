import LandingPage from "./Pages/LandingPage.jsx";
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Footer from "./Pages/Footer.jsx";
import ConfirmRoom from "./Pages/ListRoom.jsx";
import React from "react";
import RentRoomPage from "./Pages/RentRoomPage.jsx";
import Navbar from "@/Components/Navbar.jsx";
import {LoginForm} from "./Components/login-form.jsx";
import SignInPage from "./Pages/SignInpage.jsx";
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
import ForgotPassword from "./Components/ForgotPassword.jsx";
import { useContext } from "react";
import { AuthContext } from "./Context/AuthContext.jsx";
import GlobalLoader from "./Components/ui/GlobalLoader.jsx";
import PaymentCard from "./Components/PaymentCard.jsx";


function App() {
    const{globalLoading,loading} = useContext(AuthContext);

    return (
        <>
        {(loading || globalLoading) && <GlobalLoader/>}
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
                        <Route path="/payment" element={
                            <ProtectedRoutes>
                                <PaymentCard/>
                            </ProtectedRoutes>
                        }/>
                    </Route>
                    <Route path={"/error/404"} element={<NotFoundPage/>}/>
                    <Route path={"/error/500"} element={<ServerErrorPage/>}/>
                    <Route path={"/error/auth"} element={<AuthenticationErrorPage/>}/>
                    <Route path={"/error/oauth"} element={<AuthorizationErrorPage/>}/>


                    <Route element={<AuthLayout/>}>
                        <Route path="/login" element={<LoginPage/>}/>
                        <Route path="/signup" element={<SignInPage/>}/>
                        <Route path="/forgotPassword" element={<ForgotPassword/>}/>

                        
                    </Route>
                </Routes>


        </>
    )
}

export default App
