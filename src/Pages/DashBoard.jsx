import RoomDashBoardCard from '@/Components/RoomDashBoardCard'
import { AuthContext } from '@/Context/AuthContext'
import { Ribbon } from 'lucide-react'
import React, { useContext } from 'react'
import { useEffect } from 'react'
import { useState } from 'react'

function DashBoard(){
  const {api} = useContext(AuthContext)
  const [rooms,setRooms] = useState([])

  useEffect(()=>{
    const loadRooms = async() =>{
      try{
          const res = await api.get("/v1/owner/rooms");
          console.log("Rooms of owner are ->", res.data);
          
          setRooms(res.data)
      }
      catch(err){
        console.error("Faled to load rooms",err);
      }
      
    };
    loadRooms();

  },[])

  

  return (
    <div className={"min-h-screen pt-20 bg-slate-100 p-6"}>
        <h1 className='text-3xl font-bold mb-6'>My Rooms</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
          { rooms.length ===0 ?(
            <p className='text-gray-500'>No rooms listed yet</p>):(
              rooms.map((room) =>(
                <RoomDashBoardCard key={room.roomId} room={room}/>
              ))   
            )
          }   
            

        </div>
    </div>
  )
}

export default DashBoard