import RoomDashBoardCard from '@/Components/RoomDashBoardCard'
import { AuthContext } from '@/Context/AuthContext'
import React, { useContext } from 'react'
import { useState } from 'react'

function DashBoard({rooms}){

  return (
    <div className={"min-h-screen bg-slate-100 p-6"}>
        <h1 className='text-3xl font-bold mb-6'>My Rooms</h1>
        <div className='grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6'>
            {rooms.map(room =>{
                <RoomDashBoardCard key={room.roomId} room={room}/>
            })}

        </div>
    </div>
  )
}

export default DashBoard