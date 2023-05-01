import React from 'react'
import mainEvent from "../assets/data/MainEvent"
import Day1 from './Day1'
import Day2 from './Day2'
import rd1 from "../assets/Images/Roadmap/rd1.png"
import rd2 from "../assets/Images/Roadmap/rd2.png"
import rd3 from "../assets/Images/Roadmap/rd3.png"
import rd4 from "../assets/Images/Roadmap/rd4.png"
import { Link } from 'react-router-dom'
const Event = () => {
  return (
    <div className='flex flex-col justify-center gap-5 items-center'>
        <div className='w-[400px] sm:w-[300px] aspect-square flex '>
            <img className=' mix-blend-lighten my-auto '  src={mainEvent.logo}/>
        </div>
        <div className='description text-justify w-[60%] text-lg sm:w-[90%]'>
             <p>
              {
                mainEvent.description
              }
             </p>
        </div>
        <Link to="/register" className="relative  inline-flex items-center justify-center  mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                       <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                       REGISTER HERE
                      </span>
                  </Link>
        <h2 className='text-5xl mt-5 sm:text-3xl font-bold text-yellow-500 underline'>Event Roadmap</h2>
        {/* <h3 className='text-violet-500 font-bold  text-3xl  my-5'>Day 1</h3> */}
        {/* <Day1/> */}
        {/* <h3 className='text-violet-500  font-bold text-3xl my-5'>Day 2</h3> */}
        {/* <Day2/> */}
        <img className='w-[60%] sm:w-[90%] mt-5' src={rd1} alt="event1"/>
        <img className='w-[60%] sm:w-[90%]' src={rd2} alt="event2"/>
        <img className='w-[60%] sm:w-[90%]' src={rd3} alt="event3"/>
        <img className='w-[60%] sm:w-[90%]' src={rd4} alt="event4"/>
    </div>
  )
}

export default Event