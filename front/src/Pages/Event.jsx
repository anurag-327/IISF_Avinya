import React from 'react'
import MainEvent from '../assets/data/MainEvent'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import Event from '../Event_Details/Event'
const Avinya = () => {
  return (
    <div className=' flex flex-col justify-center z-50 items-center'>
        <Navbar/>
        <Event/>
        <Footer />
    </div>
  )
}

export default Avinya