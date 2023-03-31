import React from 'react'
import "./animate.css"
import Confetti from 'react-confetti'
const Heading = () => {
  return (
    <div className='relative  h-screen sm:h-[90vh]  sm:mt-[-6rem] mt-[-10rem] justify-center items-center flex flex-col'>
    <div className='flex flex-col justify-center items-center    relative '>
        <div className='flex animate-bounce-finite'>
            <div className='text-[15vw] relative animate1 sm:text-[20vw]  font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-200 to-blue-400  via-pink-400   drop-shadow-md'>S</div>
            <div className='text-[15vw] relative animate2 sm:text-[20vw]  font-bold bg-clip-text text-transparent bg-gradient-to-l from-orange-200 to-blue-400  via-pink-400   drop-shadow-md'>R</div>
            <div className='text-[15vw] relative animate3 sm:text-[20vw]  font-bold bg-clip-text text-transparent bg-gradient-to-t from-orange-200 to-blue-400  via-pink-400   drop-shadow-md'>I</div>
            <div className='text-[15vw] relative animate4 sm:text-[20vw]  font-bold bg-clip-text text-transparent bg-gradient-to-b from-orange-200 to-blue-400  via-pink-400   drop-shadow-md'>J</div>
            <div className='text-[15vw] relative animate5 sm:text-[20vw]  font-bold bg-clip-text text-transparent bg-gradient-to-r from-orange-200 to-blue-400  via-pink-400   drop-shadow-md'>A</div>
            <div className='text-[15vw] relative animate6 sm:text-[20vw]  font-bold bg-clip-text text-transparent bg-gradient-to-l from-orange-200 to-blue-400  via-pink-400    drop-shadow-md'>N</div>
        </div>
        {/* <div className='absolute animate-bounce-finite right-0 bottom-[5%]'>
        <span className='text-3xl bg-gradient-to-r from-pink-200 to-orange-200 bg-clip-text text-transparent'>Unleash your potential</span>
        </div> */}
      
        <div className='w-[80%] sm:w-[95%] mt-5  bg-clip-padding shadow-md shadow-purple-300 backdrop-filter backdrop-blur-xl bg-opacity-60 border border-gray-200   text-center  rounded-xl p-3 min-h-[8rem]'>
        {/* <Confetti
      width='750px'
      height="500px"
      run={false}
    /> */}
        <div>
            <h1 className='text-4xl mb-2  font-bold'>
               Welcome to SRIJAN
            </h1>
            <p className='font-semibold  text-white'>
              A Startup fair Organised by Innovation, Incubation and StartUp Foundation, KNIT Sultanpur from April 21 to April 24
            </p>

        </div>
    </div>
    <div className='text-2xl mt-5 opacity-5 text-gray-50 animate-pulse'>
            <span>Scroll Down</span>
        </div>
    </div>
   
    </div>
  )
}

export default Heading