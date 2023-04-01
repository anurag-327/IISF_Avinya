import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/Images/Logo/IISF_LOGO.png"
import MainEvent from './MainEvent'
const About = () => {
  return (
    <div className=' w-[80%] sm:w-[95%] rounded-2xl border-2 border-blue-400 '>
      <div className='bg-white rounded-t-2xl text-black p-2'>
        <h1 className='text-4xl text-center font-bold'>About Us</h1>
      </div>
        <div className='flex  rounded-b-2xl justify-center sm:mt-0 mt-2 bg-gra dient-to-t from-gray-800 to-gray-900  gap-2 items-center sm:flex-col '>
            <div className=' relative group'>
               <img className='w-full mx-auto' src={Logo} alt="IISF_LOGO"/>
             
            </div>
            <div className='w-[80%] sm:w-full  p-5 '>
                <h1 className=' text-3xl font-poppins text-center font-bold  text-yellow-300'>Innovation, Incubation and Startup Foundation</h1>
                <p className='text-justify text-lg mt-2'>The Innovation Incubation and Startup Foundation (IISF) KNIT Sultanpur has withstood the time signifying as an epitome of E-Cell. With a glorious history of incubating myriad startups in various domains as well as through conducting entrepreneurial events, the IISF KNIT Sultanpur has been a pioneer in fostering awareness among the students regarding the thriving startup world and business strategies.</p>
                <Link className='text-blue-300 float-right  text-end font-semibold ' to="/iisf"><p>Show more &rarr;</p></Link>
            </div>
        </div>
        
   </div>
  )
}

export default About