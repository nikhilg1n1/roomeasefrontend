import React, { useContext, useEffect, useRef, useState } from "react";
import searchSvg from "../assets/Search.svg";
import { Button } from "./ui/button";
import { AuthContext } from "@/context/AuthContext";
import { ImageOff } from "lucide-react";
import { useDebounce } from "@/utilities/UseDebounce";
import { useNavigate } from "react-router-dom";


function SearchBar({ onSearch }) {
  const [query, setQuery] = useState("");
  const dropdownRef = useRef(null);
  const { api } = useContext(AuthContext);
  const [suggestions, setSuggestions] = useState([]);
  const [showDropDown, setShowDropDown] = useState(false);
  const [activeIndex, setActiveIndex] = useState(-1);
  const debouncedQuery = useDebounce(query, 400);
  const navigate = useNavigate();

  // useEffect(() => {
  //     if (!query.trim) return;
  //     const timer = setTimeout(() => {
  //         handleSearch();
  //     }, 500);
  //     return ()=>clearTimeout(timer);
  // },[query]);

  //Fetching suggestions while typing

  useEffect(() => {
    if (!debouncedQuery.trim()) {
      setSuggestions([]);
      return;
    }

    const fetchSuggestion = async () => {
      try {
        const res = await api.get("/v1/searchRooms", {
          params: { query: debouncedQuery },
        });
        console.log("Searched rooms ->", res.data);
        setSuggestions(res.data || []);
        setShowDropDown(true);

        onSearch(res.data);
      } catch (err) {
        console.log("Search Error", err);
      }
    };
      fetchSuggestion();
  },[debouncedQuery]);

  //Close when clicking outside

  useEffect(()=>{
    const handleClickOutside = (e) =>{
        if(dropdownRef.current && !dropdownRef.current.contains(e.target)
){
            setShowDropDown(false)
        }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown",handleClickOutside)

  },[])

  const handleSearch = async () => {
    if (!query.trim()) return;

    try {
      const res = await api.get("/v1/searchRooms", {
        params: { query },
      });
      console.log("Searched rooms ->", res.data);

      onSearch(res.data);
      setShowDropDown(false)
    } catch (err) {
      console.log("Search Error", err);
    }
  };

  //keyboard navigations 

  const handleKeyDown = (e)=>{
    if(!showDropDown) return;

    if(e.key === "ArrowDown"){
        console.log("Down");
        setActiveIndex((prev) =>
            prev < suggestions.length -1 ? prev+1 : prev 
        );
    }

    if(e.key === "ArrowUp"){

        setActiveIndex((prev) => (prev > 0 ? prev -1 : 0 ))
    }

    if(e.key === "Enter"){
        if(activeIndex >= 0){
            const selected = suggestions[activeIndex];
            // setQuery(selected.address);
            // handleSearch(selected.address);.
            navigate(`/description/${selected.roomId}`);
            setShowDropDown(false);
        }else{
            handleSearch();
        }
    }
  };

  const highlight= (text) =>{
    if(!text) return "";

    const parts = text.split(new RegExp(`(${query})`,"gi"));

    return parts.map((part , i)=>
        part.toLowerCase() === query.toLowerCase() ? (
            <span key={i} className="font-bold text-blue-600">{part}</span>
        ):(part)
    );
    
  };


  return (
    <div className={"rounded-2xl flex gap-8 items-center p-4"} ref={dropdownRef}>
      <div
        className={
          "w-[762px] h-[48px] bg-[#E2E8F0] flex items-center rounded-xl "
        }
      >
        <input
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder={"Search Rooms near you"}
          className={
            "text-[#212121] pl-4 rounded-lg bg-[#E2E8F0] text-lg focus:outline-none focus:ring-0 focus:border-transparent  w-full h-full"
          }
        />
      </div>
      <Button
        variant={"default"}
        onClick={() =>handleSearch()}
        className="h-[48px] rounded-xl "
      >
        Search
      </Button>

      {/* Suggestions Dropdown */}
      {showDropDown  && suggestions.length > 0  && (
        <div className="absolute top-[70px] left-4 w-[762px] bg-white shadow-lg rounded-xl z-40 border ">
            {suggestions.map((item,index) =>(
                <div 
                    key={item.roomId}
                    onClick={()=>{
                    //     setQuery( item.city || item.address);
                    //     handleSearch(item.city || item.address);
                    //     console.log("Address is -> ", item.address);
                    navigate(`/description/${item.roomId}`);
                    setShowDropDown(false);
                        
                    }}
                    
                    
                    className={`p-3 cursor-pointer border-b-2 ${
                        index === activeIndex ? "bg-gray-300":"hover:bg-gray-200"}`}
                >
                  {console.log("index is ->",index)}

                  {console.log("active index ->", activeIndex )}
                    <div className="font-medium">
                        {highlight(item.city )}
                        {highlight(item.address)}

                    </div>
                    {item.city && (
                        <div className="text-sm text-gray-500">{item.city}</div>
                    )}
                    {item.address && (
                        <div className="text-sm text-gray-500">{item.address}</div>
                    )}
                </div>
            ))}
        </div>
      )}
    </div>
  );
}
export default SearchBar;
