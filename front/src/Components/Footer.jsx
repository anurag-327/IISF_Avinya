import React from "react";

import { Link } from "react-router-dom";
import { InstagramLogo, TwitterLogo, FacebookLogo ,LinkedinLogo,Envelope} from "phosphor-react";
const Footer = () => {
  return (
    <footer className="  mt-5  w-full  dark:bg-gray-900 flex flex-col gap-3 p-5 text-gray-300 ">
        <div>
          <ul className="flex gap-3 sm:gap-5 justify-center items-center">
            <li><a href="https://www.instagram.com/iisf_knit"><InstagramLogo size={34} color="#ffffff" /></a></li>
            <li><a href="https://twitter.com/iisf_knit"><TwitterLogo size={34} color="#ffffff" /></a></li>
            <li><a href="https://www.facebook.com/startupcell.knit"><FacebookLogo size={34} color="#ffffff" /></a></li>
            <li><a href="https://www.linkedin.com/in/iisfknit"><LinkedinLogo size={34} color="#ffffff" /></a></li>
            <li><a href="mailto:iisfknit@knit.ac.in"><Envelope size={34} color="#ffffff" /></a></li>
          </ul>
        </div>
        <div>
            <ul className="flex gap-5 sm:gap-1 text-lg justify-center font-extralight items-center sm:flex-col">
                <li className="hover:underline"><Link to="/iisf">About Us</Link></li>
                <li className="hover:underline"><Link to="/results">Results</Link></li>
                <li className="hover:underline"><Link to="/sponsors">Sponsors</Link></li>
               
                <li className="hover:underline"><Link to="/contact">Contact</Link></li>
            </ul>
        </div>
      
      <div className=" text-gray-200 text-center  font-semibold ">
              <span> @IISF, KNIT SULTANPUR</span>
    </div>
    </footer>
  );
};

export default Footer;
{/* <li className="hover:underline"><Link to="/gallery">Gallery</Link></li> */}
