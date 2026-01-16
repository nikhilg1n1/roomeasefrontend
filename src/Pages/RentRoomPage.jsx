import React, {useContext, useEffect, useState} from "react";
import {useParams} from "react-router-dom";

import { Slider } from "@/Components/ui/slider.jsx";
import PriceRangeSlider from "@/Components/ui/PriceRangeSlider.jsx";
import SearchBar from "@/Components/SearchBar.jsx";
import { Button } from "@/Components/ui/button";
import {Base_Url} from "@/Constants/api.js";
// import api from "@/Constants/api.js";
import { tooggleValue } from "@/Utilities/Utility";
import roomDescription from "@/Pages/RoomDescription.jsx";
import {AuthContext} from "@/Context/AuthContext.jsx";



const RentRoom = () => {
    const [roomType, setRoomType] = useState([])
    const { api } = useContext(AuthContext);
    const [occupacy,setOccupacyType]=useState([])
    const [imageUrl, setImageUrl]=useState(null)
    const [maxRent, setMaxRent] = useState(15000)
    const [minRent, setMinRent] = useState(4000)
    const [rooms, setRoom] = useState([])
    // const {imageId} = useParams()

    useEffect(() => {
    api.get("/v1/rooms")
      .then((res) => {
        console.log("Rooms => ", res.data);
        setRoom(res.data);
      })
      .catch((err) => console.log(err));
  }, []);

    // useEffect(() => {
    //     api.get(`/v1/image/${rooms.imageId}`, {responseType: "blob"})
    //         .then((res) => {
    //             setImageUrl(URL.createObjectURL(res.data));
    //
    //         })
    // }, []);
    //



    const roomDescriptions = (roomId) =>{api.get(`/v1/description/${roomId}`)
        .then((res)=>{
            console.log(res);
        })}


    
        const filterRooms=() =>{
            const payload = {
                maxRent,
                minRent,
                roomType,
                occupacy
            };
            console.log("Payload is ->" ,payload);
            
         api.post("/v1/filter",payload)
        .then((res) =>{
            console.log("Filterd Room =>" ,res.data);
            setRoom(Array.isArray(res.data) ? res.data : []);
            // console.log("Filterd room :" ,rooms);
            
            
        })
        .catch((err) => console.log(err));
        
    }
    
    return (
        <div className="min-h-screen bg-slate-200 pt-16">
            {/* Search Bar */}
            <div className="bg-white lg:w-full md-w-1/2 sm:flex-row fixed  gap-4 items-center">
                <SearchBar onSearch={setRoom} />
            </div>

            {/* Main Content */}
            <div className="flex flex-col md:flex-row h-auto md:h-[calc(100vh-64px)] overflow-hidden">

                {/* Filters */}
                <aside className="w-full md:w-1/4 bg-gray-100 p-4 mt-20  top-0 shadow md:block md:top-16 md:h-[calc(100vh-144px)] overflow-y-auto">
                    <h2 className="text-xl font-semibold mb-4">Filters</h2>

                    {/* Room Type */}
                    <div>
                        <h2 className="text-lg text-black font-normal mb-2">Room type</h2>
                        <label className="block mb-2">
                            <input type="checkbox" 
                                checked={roomType.includes("single")}
                                onChange={()=>setRoomType(tooggleValue("single",roomType))}
                                className="mr-2" /> Single
                        </label>
                        <label className="block mb-2">
                            <input type="checkbox" 
                                checked={roomType.includes("shared")}
                                onChange={()=>setRoomType(tooggleValue("shared",roomType))}
                                className="mr-2" /> Shared
                        </label>
                        <label className="block mb-2">
                            <input type="checkbox" 
                                checked={roomType.includes("1BHK")}
                                onChange={()=>setRoomType(tooggleValue("1BHK",roomType))}
                                className="mr-2" /> 1BHK
                        </label>
                    </div>

                    <hr className="hidden md:block my-4 border-t border-gray-300" />


                    {/* Suitable For */}
                    <div>
                        <h2 className="text-lg text-black font-normal mb-2">Looking for</h2>
                        <label className="block mb-2">
                            <input type="checkbox"
                                checked={occupacy.includes("Boys")}
                                onChange={()=>setOccupacyType(tooggleValue("Boys",occupacy))}
                                className="mr-2" /> Boys
                        </label>
                        <label className="block mb-2">
                            <input type="checkbox"
                                checked={occupacy.includes("Girls")}
                                onChange={()=>setOccupacyType(tooggleValue("Girls",occupacy))}
                                className="mr-2" /> Girls
                        </label>
                        <label className="block mb-2">
                            <input type="checkbox"
                                checked={occupacy.includes("Family")}
                                onChange={()=>setOccupacyType(tooggleValue("Family",occupacy))} 
                                className="mr-2" /> Family
                        </label>
                    </div>

                    <hr className="hidden md:block my-4 border-t border-gray-300" />

                    {/* Price Range */}
                    <div className="">
                        <h2 className="text-lg text-black font-normal mb-2">Set range</h2>
                        <label className="block mb-8">
                            <PriceRangeSlider
                                minRent={minRent}
                                maxRent={maxRent}
                                onMinChange={(value) =>setMinRent(value)}
                                onMaxChange={(value)=>setMaxRent(value)}
                            />
                        </label>
                    </div>
                    <Button variant={"default"} onClick={filterRooms} className="mt-4 w-full">
                        Apply filter
                    </Button>
                </aside>

                {/* Room Listings */}
                <section className="flex-1 mt-24 px-4 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    { rooms.length===0 && (
                        <p>No Rooms Found</p>
                    )}

                    {/*    [...Array(14)].map((_, item) => (*/}
                    {/*    <div key={item} className="bg-white rounded shadow p-4">*/}
                    {/*        <div className="h-40 bg-gray-300 rounded mb-4"></div>*/}
                    {/*        <h3 className="text-lg font-semibold">Spacious Room in Andheri</h3>*/}
                    {/*        <p className="text-sm text-gray-600">₹8000/month - Andheri East, Mumbai</p>*/}
                    {/*        <Button varient={"default"} className="mt-4 text-white px-4 py-2 rounded">*/}
                    {/*            View Details*/}
                    {/*        </Button>*/}
                    {/*    </div>*/}
                    {/*))}*/}

                    {
                        rooms.map((room) => (
                            <div key={room.roomId} className="bg-white h-80 rounded shadow p-4">
                                {/*//image*/}
                                <div className={"h-40 rounded mb-4 overflow-hidden bg-gray-200"}>
                                    {
                                            
                                        room.imageId  ? (
                                            <img
                                            src={`${Base_Url}/v1/image/${room.imageId}`}
                                            // src={imageUrl}
                                            alt={room.title}
                                            className="object-cover h-full w-full"/>
                                        ):(
                                            <div className={"w-full h-full bg-gray-300"}>

                                            </div>
                                        )}
                                    

                                </div>
                                <h3 className={"text-lg font-semibold text-black"}>{room.title}</h3>
                                <p className = "text-sm text-gray-400">
                                    ₹{room.rent}/month - {room.city}
                                </p>

                                <Button onClick={()=>roomDescriptions(room.roomId)} className="mt-4 text-white py-2 px-4 rounded"  variant={"default"} to={`/description/${room.roomId}`}>
                                        View Details
                                </Button>


                            </div>
                        ))
                    }
                </section>
            </div>


        </div>
    );
};

export default RentRoom;
