import React from 'react'
import events from '../assets/Events'
import EventCard from './EventCard'
import { CaretLeft, CaretRight } from 'phosphor-react'
const Events = () => {
    function scrollleft()
    {
        const slider=document.querySelector(".slider")
        slider.scrollLeft-=400;
    }
    function scrollright()
    {
        const slider=document.querySelector(".slider")
        slider.scrollLeft+=400;
    }
  return (
    <div className='relative w-[80%] sm:w-full'>
        <div className='bg-white rounded-t-md text-black p-2'>
            <h2 className='text-4xl text-center font-bold'>Events</h2>
        </div>
        <CaretRight onClick={scrollright} className='cursor-pointer absolute right-0 top-[50%] z-10  bg-gray-900 rounded-full p-1' size={36} color="#ffffff" />
        <div  className=' mt-3 sm:mt-0  slider scroll-smooth w-full h-full   whitespace-nowrap overflow-x-auto no-scrollbar'>
           {
                 events.map(item => <EventCard item={item} />)
           }
        <CaretLeft onClick={scrollleft} className=' cursor-pointer  absolute left-0 top-[50%] bg-gray-900 rounded-full p-1' size={36} color="#ffffff"  />
        </div>
    </div>
  )
}

export default Events