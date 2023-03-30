import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from '../Components/Footer'
import FAQ from '../Components/FAQ'
import Sponsors from '../Components/Sponsors'
const Home = () => {
  return (
    <div className='flex  flex-col gap-6'>
      <Navbar />
      <Sponsors />
      <FAQ />
      <Footer />
    </div>
  )
}

export default Home