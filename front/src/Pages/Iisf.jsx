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
                  </q><br></br>MIC has envisioned encouraging the creation of ‘The Institution’s Innovation Council (IICs)’ across selected Higher Educational Institutions. Innovation Incubation and Startup Foundation KNIT (earlier known as Innovation Incubation and Startup Cell KNIT Sultanpur) are established under IIC to promote innovation in the Institution through multitudinous modes leading to an innovation promotion ecosystem in the campuses.                  
                  Back in 2016 when India had just 471 recognized startups across the nation, the Government of India recognized the potential of the technocrats in the nation and took the initiative of  "Startup India" which aims to build a strong eco-system for nurturing innovations and Startups in the country that will drive sustainable economic growth and generate large scale employment opportunities.
                  On January 16, 2016, an action plan was unveiled which consisted of 19 action items spanning areas such as “Simplification and handholding”, “Funding support and incentives” and “Industry-academia partnership and incubation”.
                  This was the time when the department of information technology and electronics, UP approved the proposal for the establishment of the Innovation Incubation and Startup Cell (now Innovation Incubation and Startup Foundation) in our institute which strived for promoting the startup culture as well as incubating ideas, the foundation received its fundings in 2017. On 12th January 2018 under the guidance of the director of the institute Prof. J.P.Pandey and coordinator Prof. H.V.Singh, Dean of Academics, KNIT sultanpur embarked on its objectives of incubating the budding ideas and providing them with the perfect platform.
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