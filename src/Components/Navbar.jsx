import React, { useContext, useEffect, useRef, useState } from "react";
import profile from "../assets/profile.png";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { Link, Route, Routes } from "react-router-dom";
import ConfirmRoom from "../Pages/ListRoom.jsx";
import { AuthContext } from "../Context/AuthContext.jsx";
import { Button } from "@/Components/ui/button.jsx";
import { useNavigate } from "react-router-dom";
import GlobalLoader from "./ui/GlobalLoader";
// import api from "@/Constants/api";

gsap.registerPlugin(TextPlugin);

function Navbar() {
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  const { user, loading, logout, authenticated, api, roles } =
    useContext(AuthContext);
  const [open, setOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef(null);

  const addOwnerRole = async () => {
    const res = await api.post("/v1/role/request-owner", { user });
    console.log("data from backend ->", res.data);
  };
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setMenuOpen(false);
      }
    }

    if (menuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    } else {
      document.removeEventListener("mousedown", handleClickOutside);
    }
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuOpen]);

  const isUser = roles.includes("USER");
  const isOwner = roles.includes("OWNER");

  if (loading) return <GlobalLoader />;

  return (
    <nav className="fixed w-full h-16 bg-black/50 backdrop-blur-sm px-4 sm:px-10 flex items-center justify-between z-40  mx-auto">
      {/* Logo */}
      <div className="text-xl text-white font-bold">
        <a href="/">RoomEase</a>
      </div>

      {/* Desktop Menu */}
      <div className="hidden sm:flex items-center gap-10">
        {user ? (
          <div className={"relative"} ref={menuRef}>
            <img
              src={user.picture || profile}
              alt="profile"
              onClick={() => setMenuOpen(!menuOpen)}
              className={"w-8 h-8 rounded-full"}
            />

            {menuOpen && (
              <div
                className={
                  "absolute right-0 mt-2 w-40 flex flex-col gap-2 bg-white shadow-md rounded-lg p-2"
                }
              >
                <Button
                  variant={"default"}
                  onClick={() => {
                    logout(user.email);
                    console.log(user.email);

                    setMenuOpen(false);
                  }}
                >
                  Logout
                </Button>
                {isOwner && (
                  <Button variant={"default"} to={"/dashboard"}>
                    Dashboard
                  </Button>
                )}
                {(isUser || roles.length === 0) && (
                  <Button variant={"default"} onClick={addOwnerRole}>
                    Be Owner
                  </Button>
                )}
              </div>
            )}
          </div>
        ) : (
          <div>
            <Button
              variant={"default"}
              className="w-full"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          </div>
        )}
      </div>

      {/* Mobile Menu Button */}
      <button
        className="sm:hidden text-white text-2xl"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="absolute top-16 left-0 w-full bg-white/10 backdrop-blur-md flex flex-col items-center gap-4 py-4 sm:hidden">
          <a
            href="#"
            className="text-lg text-white hover:text-indigo-300 transition"
          >
            Projects
          </a>
          <a
            href="#"
            className="text-lg text-white hover:text-indigo-300 transition"
          >
            Resume
          </a>
        </div>
      )}
    </nav>
  );
}

export default Navbar;
