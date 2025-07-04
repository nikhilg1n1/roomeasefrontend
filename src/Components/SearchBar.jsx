import React from 'react'
import searchSvg from '../assets/Search.svg'
import { Button } from './ui/button'


function SearchBar () {
    return (
        <div className={'rounded-2xl flex gap-8 items-center p-4'}>
            <div className={"w-[762px] h-[48px] bg-[#E2E8F0] flex items-center rounded-xl "}>
                <input placeholder={"Search Rooms near you"} className={"text-[#212121] pl-4 rounded-lg bg-[#E2E8F0] text-lg focus:outline-none focus:ring-0 focus:border-transparent  w-full h-full"}/>
            </div>
            <Button variant={"default"} className="h-[48px] rounded-xl ">Search</Button>
        </div>
    )
}
export default SearchBar
