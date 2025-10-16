import React, {useEffect, useState} from "react";
import { Slider } from "@/Components/ui/slider.jsx";
import PriceRangeSlider from "@/Components/ui/PriceRangeSlider.jsx";
import SearchBar from "@/Components/SearchBar.jsx";
import { Button } from "@/Components/ui/button";
import api from "@/Constants/api.js";


const RentRoom = () => {

    const [maxRent, setMaxRent] = useState(15000)
    const [minRent, setMinRent] = useState(4000)
    // useEffect(() => {
    //     api.get("/v1/rooms/check")
    //
    //
    // }, []);
    return (
        <div className="min-h-screen bg-slate-200 pt-16">
            {/* Search Bar */}
            <div className="bg-white lg:w-full md-w-1/2 sm:flex-row fixed  gap-4 items-center">
                <SearchBar />
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
                            <input type="checkbox" className="mr-2" /> Single
                        </label>
                        <label className="block mb-2">
                            <input type="checkbox" className="mr-2" /> Shared
                        </label>
                        <label className="block mb-2">
                            <input type="checkbox" className="mr-2" /> 1BHK
                        </label>
                    </div>

                    <hr className="hidden md:block my-4 border-t border-gray-300" />


                    {/* Suitable For */}
                    <div>
                        <h2 className="text-lg text-black font-normal mb-2">Looking for</h2>
                        <label className="block mb-2">
                            <input type="checkbox" className="mr-2" /> Student
                        </label>
                        <label className="block mb-2">
                            <input type="checkbox" className="mr-2" /> Working Professional
                        </label>
                        <label className="block mb-2">
                            <input type="checkbox" className="mr-2" /> Family
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
                                onMinChange={setMinRent}
                                onMaxChange={setMaxRent}
                            />
                        </label>
                    </div>
                </aside>

                {/* Room Listings */}
                <section className="flex-1 mt-24 px-4 overflow-y-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {[...Array(14)].map((_, item) => (
                        <div key={item} className="bg-white rounded shadow p-4">
                            <div className="h-40 bg-gray-300 rounded mb-4"></div>
                            <h3 className="text-lg font-semibold">Spacious Room in Andheri</h3>
                            <p className="text-sm text-gray-600">₹8000/month - Andheri East, Mumbai</p>
                            <Button varient={"default"} className="mt-4 text-white px-4 py-2 rounded">
                                View Details
                            </Button>
                        </div>
                    ))}
                </section>
            </div>


        </div>
    );
};

export default RentRoom;
