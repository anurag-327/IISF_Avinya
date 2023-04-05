import React from "react";

import { Link } from "react-router-dom";
import { InstagramLogo, TwitterLogo, FacebookLogo ,LinkedinLogo,Envelope, Phone, Compass, PaperPlaneTilt } from "phosphor-react";
const ContactUs = () => {
  return (
    <div className="  mt-5  w-full  dark:bg-gray-900 flex flex-col gap-3 p-5 text-gray-300 ">
        <div>
        <h1 className='text-3xl text-center font-poppins font-bold text-white-400'>Feel free to Contact Us!</h1>
        <hr className='mt-1'></hr>
        <div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3577.1638848003204!2d82.08012771453454!3d26.28878669299973!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x399a7c86d691219f%3A0x99a3eb1e7c07f78f!2sKamla%20Nehru%20Institute%20of%20Technology%2C%20Sultanpur%20(U.P.)!5e0!3m2!1sen!2sin!4v1680633456902!5m2!1sen!2sin"
         width="100%" height="450" style={{border:0}} allowFullScreen="" loading="lazy" 
         referrerpolicy="no-referrer-when-downgrade">
        </iframe>
        </div>
        <hr className='mt-1'></hr>
            <div className="flex flex-col justify-between">
              <div>
                <p className="pt-2 sm">There is no pain you are receding</p>
              </div> 
              <div>
              <Phone size={35} />
              <span>The Beatles</span>
              <Phone size={35} />
              <span>The Beatles</span>
              </div>
              <div>
              <Compass size={35} />
              <span>The Beatles</span>
              </div>
              <div>
              <PaperPlaneTilt size={35} />
              <span>The Beatles</span>
              </div>
            </div>
          <ul className="flex gap-3 sm:gap-5 justify-center items-center">
            <li><a href="https://www.instagram.com/iisf_knit"><InstagramLogo size={56} color="#ffffff" /></a></li>
            <li><a href="https://twitter.com/iisf_knit"><TwitterLogo size={56} color="#ffffff" /></a></li>
            <li><a href="https://www.facebook.com/startupcell.knit"><FacebookLogo size={56} color="#ffffff" /></a></li>
            <li><a href="https://www.linkedin.com/in/iisfknit"><LinkedinLogo size={56} color="#ffffff" /></a></li>
            <li><a href="mailto:iisfknit@knit.ac.in"><Envelope size={56} color="#ffffff" /></a></li>
          </ul>
        </div>
    </div>
  );
};

export default ContactUs;
