import React from 'react'
import MainEvent from '../assets/data/MainEvent'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
const Avinya = () => {
  return (
    <div className=' flex flex-col justify-center z-50 items-center'>
        <Navbar/>
        {
            MainEvent.schedule.length >0?(<div><h1>Details</h1></div>):(<div className='text-4xl sm:text-2xl text-center mx-auto mt-20 font-poppins'> Details will be updated soon...</div>)
        }
        {/* <Footer /> */}
    </div>
  )
}

export default Avinya