import React from 'react'
import Navbar from '../Components/Navbar'
import FAQ from '../Components/FAQ'
import ContactUs from '../Components/ContactUs'
import Footer from '../Components/Footer'
const Contact = () => {
  return (
    <div className='flex justify-center items-center  flex-col gap-10'>
        <Navbar/>
        <div className=' w-full z-50'>
            <ContactUs />
            <FAQ />
            <Footer />
        </div>
       
    </div>
  )
}

export default Contact