import React from 'react'
import mainEvent from "../assets/data/MainEvent"
import Day1 from './Day1'
import Day2 from './Day2'
const Event = () => {
  return (
    <div className='flex flex-col justify-center gap-5 items-center'>
        <div className='w-[400px] sm:w-[300px] aspect-square flex '>
            <img className=' mix-blend-lighten my-auto '  src={mainEvent.logo}/>
        </div>
        <div className='description text-justify w-[60%] text-lg sm:w-[80%]'>
             <p>
              {
                mainEvent.description
              }
             </p>
        </div>
        <h2 className='text-5xl mt-5 sm:text-3xl text-yellow-500 underline'>Event Roadmap</h2>
        <h3 className='  text-3xl  my-5'>Day 1</h3>
        <Day1/>
        <h3 className='text-3xl my-5'>Day 2</h3>
        <Day2/>
    </div>
  )
}

export default Event