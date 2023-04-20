import React from "react";
import { Link } from "react-router-dom";
import { InstagramLogo, TwitterLogo, FacebookLogo ,LinkedinLogo,Envelope, Phone,House, Compass, PaperPlaneTilt } from "phosphor-react";
import { finalyear } from "../assets/data/Team";
import contact1 from "../assets/Images/contacts/contact1.png" 
import contact2 from "../assets/Images/contacts/contact2.png" 
import contact3 from "../assets/Images/contacts/contact3.png" 
import contact4 from "../assets/Images/contacts/contact4.png" 
const ContactUs = () => {
  return (
    <div className="  mt-5  w-full  dark:bg-gray-900 flex flex-col gap-3 p-5 text-gray-300 ">
        <div>
        <h1 className='text-3xl sm:text-xl text-center font-poppins font-bold text-white-400'>Feel free to Contact us</h1>
        {/* <div className="flex mx-auto mt-10 flex-wrap w-[80%] sm:w-[95%] justify-evenly items-center gap-10 ">
          <img className="w-[200px] rounded-lg border-2" src={contact1} alt="Aniket Soni" />
          <img className="w-[200px] rounded-lg border-2" src={contact2} alt="Smiti Srivatava" />
          <img className="w-[200px] rounded-lg border-2" src={contact3} alt="Amitesh Singh" />
          <img className="w-[200px] rounded-lg border-2" src={contact4} alt="Anjali khatri" />
        </div> */}
        <div className="flex mt-10 flex-col gap-5 border-2 p-5 shadow-md shadow-cyan-200 w-[300px] mx-auto rounded-md">
          <div className="flex gap-4 justify-start items-center">
              <Envelope size={46} color="#ffffff" />
              <a className="text-lg text-blue-400 underline" href="mailto:iisfknit@knit.ac.in">iisfknit@knit.ac.in</a>
          </div>
          <div className="flex gap-4 justify-start items-center">
              <Phone size={46} color="#ffffff"  />
              <div className="flex-col flex justify-center items-center">
                  <span  >+91 9170702211</span>
                  <span>+91 8052624088</span>
              </div>
          </div>
          <div className="flex gap-4 justify-start items-center">
              <House size={46} color="#ffffff"  />
              <span className="font-semibold">IISF, KNIT Sultanpur<br></br> Sultanpur, Uttar Pradesh 228118</span>
               
          </div>
        </div>
        
          <h2 className="text-center font-bold text-3xl sm:text-xl mt-10 text-cyan-200">Social Media Handles</h2>
          <ul className="flex gap-3 mt-5 sm:gap-5 justify-center items-center">
            <li><a href="https://www.instagram.com/iisf_knit"><InstagramLogo size={46} color="#ffffff" /></a></li>
            <li><a href="https://twitter.com/iisf_knit"><TwitterLogo size={46} color="#ffffff" /></a></li>
            <li><a href="https://www.facebook.com/startupcell.knit"><FacebookLogo size={46} color="#ffffff" /></a></li>
            <li><a href="https://www.linkedin.com/in/iisfknit"><LinkedinLogo size={46} color="#ffffff" /></a></li>
            <li><a href="mailto:iisfknit@knit.ac.in"><Envelope size={46} color="#ffffff" /></a></li>
          </ul>
        </div>
        <div className="w-[80%]  sm:w-full mt-10 mx-auto">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.1638848003204!2d82.08012771453454!3d26.28878669299973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a7c86d691219f%3A0x99a3eb1e7c07f78f!2sKamla%20Nehru%20Institute%20of%20Technology%2C%20Sultanpur%20(U.P.)!5e0!3m2!1sen!2sin!4v1680633456902!5m2!1sen!2sin"
         width="100%" height="250" style={{border:0}} allowFullScreen="" loading="lazy" 
         referrerpolicy="no-referrer-when-downgrade">
        </iframe>
        </div>
    </div>
  );
};

export default ContactUs;


// <div className="flex sm:flex-col  w-full">
//           {
//             finalyear.map((item) =>(<div class="flex items-center h-screen w-full justify-center">

//             <div className="max-w-xs">
//                 <div className="bg-white shadow-xl rounded-lg py-3">
//                     <div className="photo-wrapper p-2">
//                         <img className="w-32 h-32 rounded-full mx-auto" src="https://www.gravatar.com/avatar/2acfb745ecf9d4dccb3364752d17f65f?s=260&d=mp" alt="John Doe"/>
//                     </div>
//                     <div className="p-2">
//                         <h3 className="text-center text-xl text-gray-900 font-medium leading-8">Joh Doe</h3>
//                         <div className="text-center text-gray-400 text-xs font-semibold">
//                             <p>Co-ordinator</p>
//                         </div>
                        
            
                       
            
//                     </div>
//                 </div>
//             </div>
            
//             </div>))
//           }

//         </div>

{/* <table className="text-xs my-3">
                            <tbody><tr>
                                <td className="px-2 py-2 text-gray-500 font-semibold">Address</td>
                                <td className="px-2 py-2">Chatakpur-3, Dhangadhi Kailali</td>
                            </tr>
                            <tr>
                                <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                                <td className="px-2 py-2">+977 9955221114</td>
                            </tr>
                            <tr>
                                <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                                <td className="px-2 py-2">john@exmaple.com</td>
                            </tr>
                        </tbody></table> */}
