import React from 'react'
import Navbar from '../Components/Navbar'
import sponsors from '../assets/data/Sponsors'
const Sponsors = () => {
  return (
    <div className=''>
        <Navbar/>
        <div className='w-[80%] mt-10 sm:w-[95%] mx-auto text-center'>
          <h1 className='text-5xl font-bold'>Sponsors</h1>
          <div className='flex mt-10 flex-wrap gap-4 justify-center items-center'>
            {
              sponsors.map((item,index) => <div key={index} className='w-[200px] break-words whitespace-pre-wrap border rounded-2xl border-yellow-500 bg-white aspect-square'>
                <img src={item.src} className="bg-contain mx-auto" alt={item.name}/>
                <h3 className='text-black font-bold text-2xl'>{item.name}</h3>
              </div>)
            }
          </div>
        </div>
    </div>
  )
}

export default Sponsors