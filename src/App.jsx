import LandingPage from "./pages/LandingPage.jsx";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Footer from "./pages/Footer.jsx";
import ConfirmRoom from "./pages/ListRoom.jsx";
import React from "react";
import RentRoomPage from "./pages/RentRoomPage.jsx";
import Navbar from "@/components/Navbar.jsx";
import { LoginForm } from "./components/login-form.jsx";
import SignInPage from "./pages/SignInpage.jsx";
import LoginPage from "./pages/LoginPage.jsx";
import ListRoom from "./pages/ListRoom.jsx";
import MainLayout from "@/pages/MainLayout.jsx";
import AuthLayout from "@/pages/AuthLayout.jsx";
import ProtectedRoutes from "@/context/ProtectedRoutes.jsx";
import SuccessPage from "./pages/SuccessPage.jsx";
import RoomDescription from "@/pages/RoomDescription.jsx";
import NotFoundPage from "@/pages/NotFoundPage.jsx";
import ServerErrorPage from "@/pages/ServerErrorPage.jsx";
import AuthenticationErrorPage from "@/pages/AuthenticationErrorPage.jsx";
import AuthorizationErrorPage from "@/pages/AuthorizationErrorPage.jsx";
import ForgotPassword from "./components/ForgotPassword.jsx";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext.jsx";
import GlobalLoader from "./components/ui/GlobalLoader.jsx";
import PaymentCard from "./components/PaymentCard.jsx";
import DashBoard from "./pages/DashBoard.jsx";

function App() {
  const { globalLoading, loading } = useContext(AuthContext);

  return (
    <>
      {(loading || globalLoading) && <GlobalLoader />}
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<LandingPage />} />
          <Route
            path="/check"
            element={
              <ProtectedRoutes>
                <ListRoom />
              </ProtectedRoutes>
            }
          />
          <Route path={"/success"} element={<SuccessPage />} />
          <Route path={"/description/:roomId"} element={<RoomDescription />} />

          <Route
            path="/rentroom"
            element={
              <ProtectedRoutes>
                <RentRoomPage />
              </ProtectedRoutes>
            }
          />
          <Route
            path="/payment"
            element={
              <ProtectedRoutes>
                <PaymentCard />
              </ProtectedRoutes>
            }
          />
          <Route
            path={"/dashboard"}
            element={
              <ProtectedRoutes>
                <DashBoard />
              </ProtectedRoutes>
            }
          />
        </Route>
        <Route path={"/error/404"} element={<NotFoundPage />} />
        <Route path={"/dashboard"} element={<DashBoard />} />

        <Route path={"/error/500"} element={<ServerErrorPage />} />
        <Route path={"/error/auth"} element={<AuthenticationErrorPage />} />
        <Route path={"/error/oauth"} element={<AuthorizationErrorPage />} />

        <Route element={<AuthLayout />}>
          <Route path="/login" element={<LoginPage />} />
          <Route path="/signup" element={<SignInPage />} />
          <Route path="/forgotPassword" element={<ForgotPassword />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
