import React from 'react'
import heroImage from '../assets/heroImage.jpg'
import SearchBar from "../Components/SearchBar.jsx";
import IconText from "../Components/IconText.jsx";
import wideRangeIcon from '../assets/wideRangeOfHome.svg'
import listYourRoomsIcon from '../assets/listYourRooms.svg'
import TrustIcon from '../assets/Trust.svg'
import Navbar from "../Components/Navbar.jsx";
import {Button} from "../Components/ui/button.jsx";
import {Link} from "react-router-dom";



const HomePage = () => {
    return (
        <section className={"min-h-screen w-full"}>
            <div className={"w-full h-[600px] flex items-center justify-center" }>
                <img src={heroImage} alt={"picture"} className={"object-cover object-center w-full h-full"} />
                <div className="absolute w-full h-[600px] inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>

                <h1 className="absolute top-40 text-center w-[1247px] justify-start text-[#212121] text-6xl font-semibold font-['family sans'] leading-[60px]">Skip the Search. Start Living. Find PGs and Rooms That Feel Like Home.</h1>
                <h1 className="absolute top-[300px] text-center w-[1247px] justify-start text-[#212121] text-2xl font-semibold font-['family sans'] leading-[60px]">Compare, connect, and book directly with trusted PG & hostel owners.</h1>
                <div className={"flex justify-between items-center gap-20 absolute top-[400px]"}>
                        {/*<Button*/}
                        {/*    text={"List room"}*/}
                        {/*    rounded={"rounded-2xl"}*/}
                        {/*    textSize={"text-xl"}*/}
                        {/*    backGroundColor={"bg-[#155DFC]"}*/}
                        {/*    btnHeigth={"h-16"}*/}
                        {/*    btnWidth={"w-[400px]"}*/}
                        {/*    textColor={"text-white"}*/}
                        {/*    fullWidth={true}*/}
                        {/*    to="/check"/>*/}
                    <Button variant={"default"} to={"/check"} size={"lg"} className={"w-60 text-xl hover:scale-105 rounded-xl hover:bg-blue-800 h-16"}>List Room</Button>
                    <Button variant={"default"} to={"/rentroom"} size={"lg"} className={"w-60 text-xl hover:scale-105 rounded-xl hover:bg-blue-800 h-16"}>Find Room</Button>


                    {/*<Button text={"Rent room"}*/}
                    {/*        rounded={"rounded-2xl"}*/}
                    {/*        textSize={"text-xl"}*/}
                    {/*        backGroundColor={"bg-[#155DFC]"}*/}
                    {/*        btnHeigth={"h-16"}*/}
                    {/*        btnWidth={"w-[400px]"}*/}
                    {/*        textColor={"text-white"}*/}
                    {/*        fullWidth={true}*/}
                    {/*        to={"/rentroom"}/>*/}

                </div>
            </div>
            <div className={"w-full h-auto gap-40  flex items-center justify-center pt-20"}>
                <IconText icon={wideRangeIcon} headerText={"Wide range of rooms"} bodyText={"We offer rooms to students and working professional."}/>
                <IconText icon={listYourRoomsIcon} headerText={"List your rooms "} bodyText={"List your rooms with us and reach people without hassle."}/>
                <IconText icon={TrustIcon} headerText={"Trusted by thousands"} bodyText={"Successfully provided the service to thousands people."}/>
            </div>
        </section>
    )
}
export default HomePage
