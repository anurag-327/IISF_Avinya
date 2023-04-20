import React from 'react'
import mainEvent from "../assets/data/MainEvent"
import Day1 from './Day1'
import Day2 from './Day2'
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
        <h3 className='text-violet-500 font-bold  text-3xl  my-5'>Day 1</h3>
        <Day1/>
        <h3 className='text-violet-500  font-bold text-3xl my-5'>Day 2</h3>
        <Day2/>
    </div>
  )
}

export default Event