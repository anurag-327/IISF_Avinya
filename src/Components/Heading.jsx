import React from 'react'
import { Link } from 'react-router-dom'
import "./animate.css"
import mainEvent from '../assets/data/MainEvent'
import Logo from "../assets/Images/Logo/svg/logo-white.svg"
const Heading = () => {
  return (
    <div className='relative   mt-[-1rem] justify-center items-center flex flex-col'>
    <div className='flex flex-col justify-center items-center    relative '>
        {/* <div className='flex animate-bounce-finite'>
            <div className='text-[15vw] relative animate1 sm:text-[20vw]  font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-200 to-blue-400  via-pink-400   drop-shadow-md'>A</div>
            <div className='text-[15vw] relative animate2 sm:text-[20vw]  font-bold bg-clip-text text-transparent bg-gradient-to-l from-orange-200 to-blue-400  via-pink-400   drop-shadow-md'>V</div>
            <div className='text-[15vw] relative animate3 sm:text-[20vw]  font-bold bg-clip-text text-transparent bg-gradient-to-t from-orange-200 to-blue-400  via-pink-400   drop-shadow-md'>I</div>
            <div className='text-[15vw] relative animate4 sm:text-[20vw]  font-bold bg-clip-text text-transparent bg-gradient-to-b from-orange-200 to-blue-400  via-pink-400   drop-shadow-md'>N</div>
            <div className='text-[15vw] relative animate5 sm:text-[20vw]  font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-200 to-blue-400  via-pink-400   drop-shadow-md'>Y</div>
            <div className='text-[15vw] relative animate6 sm:text-[20vw]  font-bold bg-clip-text text-transparent bg-gradient-to-l from-orange-200 to-blue-400  via-pink-400   drop-shadow-md'>A</div>
        </div> */}
        <div className='w-[400px] sm:w-[300px] aspect-square flex '>
          <img className=' mix-blend-lighten my-auto '  src={mainEvent.logo}/>
        </div>

        <div className='w-[80%] sm:w-[95%] mt-5  bg-clip-padding shadow-md shadow-purple-300 backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200   text-center  rounded-tl-3xl rounded-br-3xl p-3 sm:p-1 min-h-[8rem]'>
        <div className='sm:p-2'>
            <h1 className='text-2xl mb-2  font-bold'>
               Welcome to <span className=' text-4xl text-blue-300'>{mainEvent.name}</span>
            </h1>
            <p className='font-semibold  text-white'>
              A Startup fair Organised by Innovation, Incubation and StartUp Foundation, KNIT Sultanpur from {mainEvent.date} at {mainEvent.venue}
            </p>

        </div>
       
    </div>
   <Link className='mt-10 border p-3 rounded-xl' to="/register">REGISTER NOW</Link>
    <div className='text-2xl mt-5 opacity-5 text-gray-50 animate-pulse'>
            <span>Scroll Down</span>
        </div>
    </div>
   
    </div>
  )
}

export default Heading