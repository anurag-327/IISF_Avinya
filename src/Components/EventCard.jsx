import React from 'react'
import event from "../assets/Images/Events/event.png"
const EventCard = ({item}) => {
  return (
    <div class="group inline-block border-[2px] border-blue-300  rounded-md mx-1 relative w-[300px]">
        <div className='text-center p-3 flex flex-col'>
            <span className='text-lg font-semibold'>{item.name}</span>
            {/* <span className='text-sm font-light'>{item.description}</span> */}
        </div>
        <img class="w-full object-cover"
            src={event} alt="event image"/>
        <div
            class="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-[#333] bg-opacity-70 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
            <h1 class="text-2xl text-white">{item.name}</h1>
            <a class="mt-5 px-8 py-3 rounded-full bg-amber-400 hover:bg-amber-600 duration-300" href="#">Know More</a>
        </div>
        
    </div>
  )
}

export default EventCard