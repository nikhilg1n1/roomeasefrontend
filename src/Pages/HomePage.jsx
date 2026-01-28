import React, { useContext, useEffect } from "react";
import heroImage from "../assets/heroImage.jpg";
import SearchBar from "../Components/SearchBar.jsx";
import IconText from "../Components/IconText.jsx";
import wideRangeIcon from "../assets/wideRangeOfHome.svg";
import listYourRoomsIcon from "../assets/listYourRooms.svg";
import TrustIcon from "../assets/Trust.svg";
import Navbar from "../Components/Navbar.jsx";
import { Button } from "../Components/ui/button.jsx";
import { Link } from "react-router-dom";
import api from "@/Constants/api.js";
import { AuthContext } from "@/Context/AuthContext";

const HomePage = () => {
  const { user , roles} = useContext(AuthContext);
  // const roles = user.role ||[]

  console.log("roles are" , roles);
  
  const isUser = roles.includes("USER");
  const isOwner = roles.includes("OWNER");
  

  return (
    <section className={"min-h-screen w-full"}>
      <div className={"w-full h-[600px] flex items-center justify-center"}>
        <img
          src={heroImage}
          alt={"picture"}
          className={"object-cover object-center w-full h-full"}
        />
        <div className="absolute w-full h-[600px] inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

        <h1 className="absolute top-40 text-center w-[1247px] justify-start text-[#212121] text-6xl font-semibold font-['family sans'] leading-[60px]">
          Skip the Search. Start Living. Find PGs and Rooms That Feel Like Home.
        </h1>
        <h1 className="absolute top-[300px] text-center w-[1247px] justify-start text-[#212121] text-2xl font-semibold font-['family sans'] leading-[60px]">
          Compare, connect, and book directly with trusted PG & hostel owners.
        </h1>
        <div
          className={`absolute top-[400px] flex items-center gap-20 ${isOwner && (isUser || roles.length === 0) ? "justify-center" : "justify-between"}`}
        >
          {isOwner && (
            <Button
              variant={"default"}
              to={"/check"}
              size={"lg"}
              className={
                "w-60 text-xl hover:scale-105 rounded-xl hover:bg-blue-800 h-16"
              }
            >
              List Room
            </Button>
          )}
          {(isUser || isOwner || roles.length === 0) && (
            <Button
              variant={"default"}
              to={"/rentroom"}
              size={"lg"}
              className={
                "w-60 text-xl hover:scale-105 rounded-xl hover:bg-blue-800 h-16"
              }
            >
              Find Room
            </Button>
          )}
        </div>
      </div>
      <div
        className={
          "w-full h-auto gap-40  flex items-center justify-center pt-20"
        }
      >
        <IconText
          icon={wideRangeIcon}
          headerText={"Wide range of rooms"}
          bodyText={"We offer rooms to students and working professional."}
        />
        <IconText
          icon={listYourRoomsIcon}
          headerText={"List your rooms "}
          bodyText={"List your rooms with us and reach people without hassle."}
        />
        <IconText
          icon={TrustIcon}
          headerText={"Trusted by thousands"}
          bodyText={"Successfully provided the service to thousands people."}
        />
      </div>
    </section>
  );
};
export default HomePage;
