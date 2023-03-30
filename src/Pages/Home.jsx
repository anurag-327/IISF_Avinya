import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import FAQ from '../Components/FAQ'
import Sponsors from '../Components/Sponsors'
import About from '../Components/About'
import Events from "../Components/Events"
import MainEvent from '../Components/MainEvent'
const Home = () => {
  return (
    <div className='flex justify-center items-center  flex-col gap-20'>
      <Navbar />
      <MainEvent />
      <About />
      <Events />
      <Sponsors />
      <FAQ />
      <Footer />
    </div>
  )
}

export default Home