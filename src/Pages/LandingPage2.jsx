import React from 'react'
import NumberComponent from "../Components/NumberComponent.jsx";
import hero2 from '../assets/heroImage2.jpg'
import {Button} from "../Components/ui/button.jsx";


function LandingPage2() {
    return (
        <section className={"min-h-screen w-full flex flex-col mt-14 gap-10  items-center justify-center"}>
            <div className={"w-[85%] h-[300px] flex items-center justify-between bg-[#212121] rounded-xl p-8 "}>
                <div className={""}>
                    <h1 className={"font-sans font-semibold text-4xl text-white"}>Take a look at our numbers</h1>
                    <h1 className={" font-sans pt-4 text-white text-lg"}>These Number are growing at tremendous
                        speed </h1>
                </div>
                <div className={"flex gap-8"}>
                    <NumberComponent headerText={"90%"} bodyText={"Customer Satisfaction"}/>
                    <NumberComponent headerText={"10k"} bodyText={"Rooms has been  booked"}/>
                    <NumberComponent headerText={"20K"} bodyText={"Rooms has been listed"}/>
                </div>
            </div>
            <div className={"w-[85%] h-[379px] flex gap-10 items-center justify-between"}>
                <div className={"w-[40%] flex flex-col gap-5"}>
                    <h1 className={"text-5xl font-semibold font-sans leading-snug text-black"}>Find rooms near colleges,
                        IT hubs, or wherever life takes you.</h1>
                    <div className={"w-1/2"}>

                        <Button variant={"default"} to={"/rentroom"} size={"lg"}
                                className={"w-60 text-xl hover:scale-105 rounded-xl hover:bg-blue-800 h-16"}>Reserve
                            Room</Button>

                        {/*<Button  text={"Reserve room"} textSize={"text-xl"} backGroundColor={"bg-[#155DFC]"} btnHeigth={44} btnWidth={156} textColor={"text-white"} fullWidth={true} />*/}
                    </div>
                </div>
                <div className={"w-[50%]"}>
                    <img src={hero2} alt={"heropic"} className={"object-cover h-[300px] w-full rounded-lg shadow-lg"}/>
                </div>
            </div>
        </section>
    )
}

export default LandingPage2
