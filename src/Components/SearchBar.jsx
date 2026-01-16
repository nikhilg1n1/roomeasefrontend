import React, { useContext, useEffect, useState } from 'react'
import searchSvg from '../assets/Search.svg'
import { Button } from './ui/button'
import { AuthContext } from '@/Context/AuthContext'
import { ImageOff } from 'lucide-react'



function SearchBar({ onSearch }) {
    const [query, setQuery] = useState("")
    const { api } = useContext(AuthContext)

    useEffect(() => {
        if (!query.trim) return;
        const timer = setTimeout(() => {
            handleSearch();
        }, 500);
        return ()=>clearTimeout(timer);
    },[query]);

    const handleSearch = async () => {
        if (!query.trim()) return;

        try {
            const res = await api.get("/v1/searchRooms", {
                params: { query }
            });
            console.log("Searched rooms ->", res.data);

            onSearch(res.data)
        }
        catch (err) {
            console.log("Search Error", err);

        }
    }
    return (
        <div className={'rounded-2xl flex gap-8 items-center p-4'}>
            <div className={"w-[762px] h-[48px] bg-[#E2E8F0] flex items-center rounded-xl "}>
                <input
                    value={query}
                    onChange={(e) => setQuery(e.target.value)}
                    placeholder={"Search Rooms near you"}
                    className={"text-[#212121] pl-4 rounded-lg bg-[#E2E8F0] text-lg focus:outline-none focus:ring-0 focus:border-transparent  w-full h-full"} />
            </div>
            <Button variant={"default"} onClick={handleSearch} className="h-[48px] rounded-xl ">Search</Button>
        </div>
    )
}
export default SearchBar
