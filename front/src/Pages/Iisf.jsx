import React from 'react'
import Navbar from '../Components/Navbar'
import Footer from "../Components/Footer"
import Logo from "../assets/Images/Logo/IISF_LOGO.png"
import { InstagramLogo, TwitterLogo, FacebookLogo ,LinkedinLogo,Envelope} from "phosphor-react";
import {creativehead,facultymembers,socialmediaandnetworkinghead,coreteammember,finalyear,eventmanagement,publicrelation,webdevelopement,rwa,thirdyearcoordinator,brandmarketing,planningandmanagement,financeandopearation,webtechnicaloperationshead,editorialhead,designingandmediateam,secondyear,researchandcorporatesteam} from "../assets/data/Team"
const About = () => {
  return (
    <>
    <Navbar />
    <div className='flex flex-col  justify-center items-center'>
      <div className='mt-10 '>
        <h1 className='text-5xl font-poppins text-center font-bold '>Innovation, Incubation and StartUp foundation</h1>
      </div>
          <div>
              <img className='' src={Logo} alt="iisf Logo" />  
          </div>  
          <div className='w-[80%] text-xl sm:w-[90%]  flex flex-col gap-12 text-justify'>
              
              <div className='introduction text-lg'>
                  <p className='text-center w-[20rem] border mx-auto rounded-md p-1 text-4xl text-orange-400 font-bold mb-4'>INTRODUCTION</p>
                  <p><q className='font-semibold text-yellow-200'>The Ministry of Human Resource Development (MHRD), Govt. of India has established ‘MHRD’s Innovation Cell (MIC)’ to systematically foster the culture of Innovation.
                  </q><br></br>The Innovation Incubation and Startup Foundation (IISF) KNIT Sultanpur has withstood the time signifying as
an epitome of E-Cell. With a glorious history of incubating myriad startups in various domains as well as
through conducting entrepreneurial events, the IISF KNIT Sultanpur has been a pioneer in fostering
awareness among the students regarding the thriving startup world and business strategies.
Our startups have been recognized by the Government of India for their excellence in their respective
domains, generating massive employment opportunities and creating an impact in society. We have been
acknowledged by various institutions and have been part of the Global Investor and G20 summit organized
by the Central Government of India. We have also been invited by various state government authorities,
prestigious departments and many such organizations for the investors and incubator summits.
In the series of creating the cognizance and transcendence about the startups and businesses, IISF is
organizing an entrepreneurial conclave of 2 days to give an opportunity to present your ideas, showcase
your knowledge and experience the heat to learn and grow, at the reputed and distinguished platform of
IISF.
                  </p>
              </div> 

              <div className='vision text-lg'>
                  <p className='text-center w-[20rem] border mx-auto rounded-md text-4xl text-green-400 font-bold mb-4'>OUR VISION</p>
                  <p><q className='font-semibold text-yellow-200'>The primary mandate of IISF,  KNIT Sultanpur is to encourage, inspire and nurture young students by supporting them to work with new ideas and transform them into prototypes while they are informative years.
                  </q><br></br>Being an Incubation Center of UP, we aim to provide the best guidance to the startup enthusiasts of the state of Uttar Pradesh and to help them in getting incentives from UP Startup.
                  </p>
              </div> 
              <div>
                <h2 className='text-center text-4xl font-bold text-blue-300 mb-5 w-[20rem] border mx-auto rounded-md'>Media Handles</h2>
                  <ul className="flex gap-3 sm:gap-5 justify-center items-center">
                      <li><a title="Instagram" href="https://www.instagram.com/iisf_knit"><InstagramLogo size={54} color="#ffffff" /></a></li>
                      <li><a title="Twitter" href="https://twitter.com/iisf_knit"><TwitterLogo size={54} color="#ffffff" /></a></li>
                      <li><a title="Facebook" href="https://www.facebook.com/startupcell.knit"><FacebookLogo size={54} color="#ffffff" /></a></li>
                      <li><a title="LinkedIn" href="https://www.linkedin.com/in/iisfknit"><LinkedinLogo size={54} color="#ffffff" /></a></li>
                      <li><a title="Mail" href="mailto:iisfknit@knit.ac.in"><Envelope size={54} color="#ffffff" /></a></li>
                  </ul>
              </div>
               
              <div className='team mx-auto my-5'>
                  <p className='text-center w-[20rem] border mx-auto rounded-md text-4xl text-orange-400 font-bold mb-4'>OUR TEAM</p>
                  <div className='flex flex-wrap text-lg justify-center  gap-20'>
                  <div className='min-w-[300px]'>
                        <ul>
                        <h2 className='text-xl my-2 underline font-semibold text-yellow-500'>Faculty Members</h2>
                        {
                      
                          facultymembers.map((item,index) => <li key={index} > {item}</li>)
                        }  
                        </ul>
                        <span className=' block '>( Faculty Coordinator )</span>
                        <a href="malilto:arvind@knit.ac.in" className=' block '> arvind@knit.ac.in</a>
                    </div>
                    <div className='min-w-[300px]'>
                        <ul>
                        <h2 className='text-xl my-2 underline font-semibold text-yellow-500'>Core Team Members</h2>
                        {
                      
                          coreteammember.map((item,index) => <li key={index}>{item}</li>)
                        }  
                        </ul>
                    </div>
                    <div className='min-w-[300px]'>
                        <ul>
                        <h2 className='text-xl my-2 underline font-semibold text-blue-500'>Final Year Coordinators</h2>
                        {
                      
                          finalyear.map((item,index) => <li key={index}>  {item}</li>)
                        }  
                        </ul>
                    </div>
                  
                    <div className='min-w-[300px]'>
                        <ul>
                        <h2 className='text-xl my-2 underline font-semibold text-yellow-500'>Event Management</h2>
                        {
                      
                          eventmanagement.map((item,index) => <li key={index}>  {item}</li>)
                        }  
                        </ul>
                    </div>
                    <div className='min-w-[300px]'>
                        <ul>
                        <h2 className='text-xl my-2 underline font-semibold text-yellow-500'>Public Relation</h2>
                        {
                      
                        publicrelation.map((item,index) => <li key={index}>  {item}</li>)
                        }  
                        </ul>
                    </div>
                    <div className='min-w-[300px]'>
                        <ul>
                        <h2 className='text-xl my-2 underline font-semibold text-yellow-500'>Web developement</h2>
                        {
                      
                          webdevelopement.map((item,index) => <li key={index}>  {item}</li>)
                        }  
                        </ul>
                    </div>
                    
                    <div className='min-w-[300px]'>
                        <ul>
                        <h2 className='text-xl my-2 underline font-semibold text-yellow-500'>Research Wing</h2>
                        {
                      
                          rwa.map((item,index) => <li key={index}>{item}</li>)
                        }  
                        </ul>
                    </div>
                    <div className='min-w-[300px]'>
                        <ul>
                        <h2 className='text-xl my-2 underline font-semibold text-yellow-500'>Third year Coordinator</h2>
                        {
                      
                          thirdyearcoordinator.map((item,index) => <li key={index}>{item}</li>)
                        }  
                        </ul>
                    </div>
                    <div className='min-w-[300px]'>
                        <ul>
                        <h2 className='text-xl my-2 underline font-semibold text-yellow-500'>Brand and marketing</h2>
                        {
                      
                          brandmarketing.map((item,index) => <li key={index}>{item}</li>)
                        }  
                        </ul>
                    </div>
                    <div className='min-w-[300px]'>
                        <ul>
                        <h2 className='text-xl my-2 underline font-semibold text-yellow-500'>Planning and Management</h2>
                        {
                      
                          planningandmanagement.map((item,index) => <li key={index}>{item}</li>)
                        }  
                        </ul>
                    </div>
                    <div className='min-w-[300px]'>
                        <ul>
                        <h2 className='text-xl my-2 underline font-semibold text-yellow-500'>Creative Head</h2>
                        {
                      
                           creativehead.map((item,index) => <li key={index}>  {item}</li>)
                        }  
                        </ul>
                    </div>
                    <div className='min-w-[300px]'>
                        <ul>
                        <h2 className='text-xl my-2 underline font-semibold text-yellow-500'>Finance and Operation</h2>
                        {
                      
                          financeandopearation.map((item,index) => <li key={index}> {item}</li>)
                        }  
                        </ul>
                    </div>
                    <div className='min-w-[300px]'>
                        <ul>
                        <h2 className='text-xl my-2 underline font-semibold text-yellow-500'>Web Technical Operations Head</h2>
                        {
                      
                      webtechnicaloperationshead.map((item,index) => <li key={index}>{item}</li>)
                        }  
                        </ul>
                    </div>
                    <div className='min-w-[300px]'>
                        <ul> 
                        <h2 className='text-xl my-2 underline font-semibold text-yellow-500'>Editorials Head</h2>
                        {
                      
                          editorialhead.map((item,index) => <li  key={index} >{item}</li>)
                        }  
                        </ul>
                    </div>
                    <div className='min-w-[300px]'>
                        <ul>
                        <h2 className='text-xl my-2 underline font-semibold text-yellow-500'>Designing and Media Team</h2>
                        {
                      
                          designingandmediateam.map((item,index) => <li  key={index} >{item}</li>)
                        }  
                        </ul>
                    </div>
                    <div className='min-w-[300px]'>
                        <ul>
                        <h2 className='text-xl my-2 underline font-semibold text-yellow-500'>Social Media and Networking head</h2>
                        {
                      
                          socialmediaandnetworkinghead.map((item,index) => <li  key={index} >{item}</li>)
                        }  
                        </ul>
                    </div>
                    <div className='min-w-[300px]'>
                        <ul>
                        <h2 className='text-xl my-2 underline font-semibold text-yellow-500'>Designing and Media Team</h2>
                        {
                      
                          researchandcorporatesteam.map((item,index) => <li  key={index} >{item}</li>)
                        }  
                        </ul>
                    </div>
                    <div className='min-w-[300px] text-justify'>
                        <ul>
                        <h2 className='text-xl my-2 underline  font-semibold text-violet-400 '>Second YearTeam</h2>
                        {
                      
                          secondyear.map((item,index) => <li  key={index} >{item}</li>)
                        }  
                        </ul>
                    </div>
                  
                  </div>
              </div>  
          </div>
    </div>
    <Footer />
    </>
  )
}

export default About