import React from 'react'
const EventCard = ({item}) => {
  return (
    <div className="group text-ellipsis inline-block border-[2px] border-blue-300 break-words whitespace-pre-wrap  rounded-md mx-2 sm:mx-1  w-[300px] aspect-square relative">
        <div className='text-center p-3 flex flex-col break-words'>
            <span className='text-lg font-bold bg-blue-200 p-1 rounded-md text-black'>{item.name}</span>
            {/* <span className='text-sm font-light'>{item.description}</span> */}
        </div>
        <img className="w-full h-full object-contain"
            src={item.src}  alt="event image"/>
        <div
            className="absolute  p-2 text-center  top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-black bg-opacity-90 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
            <h1 className="text-2xl font-semibold whitespace-pre break-words text-blue-400">{item.name}</h1>
            <p className='font-semibold'>{item.description}</p>
            {/* <button className="mt-5 px-8 py-3 rounded-full bg-amber-400 hover:bg-amber-600 duration-300" >Learn More</button> */}
        </div>   
    </div>
  )
}

export default EventCard