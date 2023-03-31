import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from "../Components/Footer"
import Logo from "../assets/Images/Logo.png"
const About = () => {
  return (
    <>
    <Navbar />
    <div className='flex flex-col justify-center items-center'>
          <div>
              <img src={Logo} alt="iisf Logo" />  
          </div>  
          <div className='w-[80%] text-xl sm:w-[90%] text-justify'>
              <div className='introduction'>
                  <p className='text-center text-4xl text-orange-400 font-bold mb-4'>INTRODUCTION</p>
                  <p><q className='font-semibold text-yellow-200'>The Ministry of Human Resource Development (MHRD), Govt. of India has established ‘MHRD’s Innovation Cell (MIC)’ to systematically foster the culture of Innovation.
                  </q><br></br>MIC has envisioned encouraging the creation of ‘The Institution’s Innovation Council (IICs)’ across selected Higher Educational Institutions. Innovation Incubation and Startup Foundation KNIT (earlier known as Innovation Incubation and Startup Cell KNIT Sultanpur) are established under IIC to promote innovation in the Institution through multitudinous modes leading to an innovation promotion ecosystem in the campuses.                  
                  Back in 2016 when India had just 471 recognized startups across the nation, the Government of India recognized the potential of the technocrats in the nation and took the initiative of  "Startup India" which aims to build a strong eco-system for nurturing innovations and Startups in the country that will drive sustainable economic growth and generate large scale employment opportunities.
                  On January 16, 2016, an action plan was unveiled which consisted of 19 action items spanning areas such as “Simplification and handholding”, “Funding support and incentives” and “Industry-academia partnership and incubation”.
                  This was the time when the department of information technology and electronics, UP approved the proposal for the establishment of the Innovation Incubation and Startup Cell (now Innovation Incubation and Startup Foundation) in our institute which strived for promoting the startup culture as well as incubating ideas, the foundation received its fundings in 2017. On 12th January 2018 under the guidance of the director of the institute Prof. J.P.Pandey and coordinator Prof. H.V.Singh, Dean of Academics, KNIT sultanpur embarked on its objectives of incubating the budding ideas and providing them with the perfect platform.
                  </p>
              </div>  
          </div>
    </div>
    <Footer />
    </>
  )
}

export default About