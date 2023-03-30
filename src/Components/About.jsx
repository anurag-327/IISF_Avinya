import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/Images/Logo.png"
const About = () => {
  return (
    <div className=' w-[80%] sm:w-full rounded-2xl '>
      <div className='bg-white rounded-t-2xl text-black p-2'>
        <h1 className='text-4xl text-center font-bold'>About Us</h1>
      </div>
        <div className='flex rounded-b-2xl justify-center sm:mt-0 mt-2 bg-gra dient-to-t from-gray-800 to-gray-900  gap-2 items-center sm:flex-col '>
            <div className='relative group'>
               <img className='w-[50%] mx-auto' src={Logo} alt="IISF_LOGO"/>
               <div
                class="absolute top-0 left-0 w-full h-0 flex flex-col justify-center items-center bg-[#333] bg-opacity-40 opacity-0 group-hover:h-full group-hover:opacity-100 duration-500">
                {/* <h1 class="text-2xl text-white">know more</h1> */}
                <a class="mt-5 px-4 py-1 rounded-2xl bg-white text-black duration-300" href="/about">See More</a>
        </div>
            </div>
            <div className='w-[50%] sm:w-full md:p-5  sm:p-5'>
                <h1 className=' text-3xl font-poppins text-center font-bold text-blue-300'>Innovation, Incubation and Startup Foundation</h1>
                <p className='text-center'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Harum sint officiis debitis id labore assumenda tempora doloribus ad odio inventore, libero maiores laboriosam ullam nemo eaque nisi quibusdam, quo reiciendis ut? Corporis vel nisi nesciunt amet! Id quos atque velit.</p>
                <Link className='text-blue-300 float-right  text-end font-semibold ' to="/about"><p>Show more &rarr;</p></Link>
            </div>
        </div>
   </div>
  )
}

export default About