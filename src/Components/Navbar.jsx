import React, {useContext, useRef, useState} from "react";
import gsap from 'gsap'
import {TextPlugin} from 'gsap/TextPlugin'
import {Link, Route, Routes} from 'react-router-dom'
import ConfirmRoom from "../Pages/ListRoom.jsx";
import {AuthContext} from '../Context/AuthContext.jsx'


gsap.registerPlugin(TextPlugin);

function Navbar ()  {
    const [isOpen, setIsOpen] = useState(false);
    const {user,loading,logout} = useContext(AuthContext)
    const [open , setOpen] = useState(false);
    console.log("User from context:", user);


    if(loading) return <div>Loading...</div>
    return (
        <nav className="fixed w-full h-16 bg-black/50 backdrop-blur-sm px-4 sm:px-10 flex items-center justify-between z-40  mx-auto">
            {/* Logo */}
            <div className="text-xl text-white font-bold">RoomEase</div>

            {/* Desktop Menu */}
            <div className="hidden sm:flex items-center gap-10">
                {user ? (
                    <img src={user.picture} alt="profile" className="w-8 h-8 rounded-full" onClick={setOpen((prev)=>!prev)}/>
                ) : (
                    <div className="w-8 h-8 rounded-full bg-gray-500" />
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
                    <a href="#" className="text-lg text-white hover:text-indigo-300 transition">Projects</a>
                    <a href="#" className="text-lg text-white hover:text-indigo-300 transition">Resume</a>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
