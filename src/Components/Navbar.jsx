import React, { useContext, useEffect, useRef, useState } from "react";
import gsap from 'gsap'
import { TextPlugin } from 'gsap/TextPlugin'
import { Link, Route, Routes } from 'react-router-dom'
import ConfirmRoom from "../Pages/ListRoom.jsx";
import { AuthContext } from '../Context/AuthContext.jsx'
import { Button } from "@/Components/ui/button.jsx";
import { useNavigate } from "react-router-dom";


gsap.registerPlugin(TextPlugin);

function Navbar() {
    const navigate = useNavigate()
    const [isOpen, setIsOpen] = useState(false);
    const { user, loading, logout, authenticated } = useContext(AuthContext)
    const [open, setOpen] = useState(false)
    const [menuOpen, setMenuOpen] = useState(false)
    const menuRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setMenuOpen(false)
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

    }, [menuOpen])

    if (loading) return <div>Loading...</div>
    return (
        <nav
            className="fixed w-full h-16 bg-black/50 backdrop-blur-sm px-4 sm:px-10 flex items-center justify-between z-40  mx-auto">
            {/* Logo */}
            <div className="text-xl text-white font-bold">RoomEase</div>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-10">
                {user ? (
                    <div className={"relative"} ref={menuRef}>
                        <img src={user.picture}
                            alt="profile"
                            onClick={() => setMenuOpen(!menuOpen)}
                            className={"w-8 h-8 rounded-full"}
                        />

                        {
                            menuOpen && (
                                <div className={"absolute right-0 mt-2 w-40 bg-white shadow-md rounded-lg p-2"}>
                                    <Button variant={"default"}
                                        onClick={() => {
                                            logout(user.sub);
                                            setMenuOpen(false)
                                        }
                                        }>Logout

                                    </Button>
                                </div>
                            )}
                    </div>

                ) : (
                    <div >
                        <Button variant={"default"} className="w-full" onClick={() => navigate("/login")}>Login</Button>

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
                <div
                    className="absolute top-16 left-0 w-full bg-white/10 backdrop-blur-md flex flex-col items-center gap-4 py-4 sm:hidden">
                    <a href="#" className="text-lg text-white hover:text-indigo-300 transition">Projects</a>
                    <a href="#" className="text-lg text-white hover:text-indigo-300 transition">Resume</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
