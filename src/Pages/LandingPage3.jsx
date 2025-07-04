import React from 'react'
import roomOwner from '../assets/roomowner.jpg'
import {Button} from "../Components/ui/button.jsx";


function LandingPage3() {
    return (
        <section className={"min-h-screen w-full bg-gradient-to-b from-white to-black "}>
            <div className={"w-85 h-screen flex flex-col justify-start pt-10 items-center gap-20"}>
                <h1 className="text-5xl text-black  text-center font-semibold">
                    Earn with us - Let us handle the work <br/>while you enjoy steady returns
                </h1>
                <div className={"w-[85%] h-[400px] bg-sky-100 p-8 rounded-lg flex items-center justify-between"}>
                    <div className={"w-[40%] flex flex-col items-center justify-center"}>
                        <img src={roomOwner} alt={"logo"} className={"rounded-lg shadow-xl"}/>
                    </div>

                    <div className={"w-[50%] flex flex-col gap-4 justify-center"}>
                        <h1 className={"font-sans text-4xl leading-snug font-semibold text-black"}>Maximize your rental
                            potential
                            list your property with us and grow your rental income.
                        </h1>
                        <div className={"w-1/2 "}>
                            {/*<Button*/}
                            {/*    text={"List room now"}*/}
                            {/*    textSize={"text-xl"}*/}
                            {/*    backGroundColor={"bg-[#155DFC]"}*/}
                            {/*    btnHeigth={44}*/}
                            {/*    btnWidth={156}*/}
                            {/*    textColor={"text-white"}*/}
                            {/*    fullWidth={true}*/}
                            {/*    to={"/check"}/>*/}

                            <Button variant={"default"} to={"/check"} size={"lg"}
                                    className={"w-60 text-xl hover:scale-105 rounded-xl hover:bg-blue-800 h-16"}>List
                                Room Now</Button>

                        </div>
                    </div>


                </div>
            </div>

        </section>
    )
}

export default LandingPage3
