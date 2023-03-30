import React from "react";
import IISF_Logo from "../assets/Images/IISF_Logo.png";
import { Link } from "react-router-dom";
import { InstagramLogo, TwitterLogo, FacebookLogo ,LinkedinLogo,Envelope} from "phosphor-react";
const Footer = () => {
  return (
    <footer className="bg-gray-800  mt-5  w-full  dark:bg-gray-900 flex flex-col gap-3 p-5 text-gray-300 ">
        <div>
          <ul className="flex gap-3 sm:gap-5 justify-center items-center">
            <li><a href="#"><InstagramLogo size={34} color="#ffffff" /></a></li>
            <li><a href="#"><TwitterLogo size={34} color="#ffffff" /></a></li>
            <li><a href="#"><FacebookLogo size={34} color="#ffffff" /></a></li>
            <li><a href="#"><LinkedinLogo size={34} color="#ffffff" /></a></li>
            <li><a href="#"><Envelope size={34} color="#ffffff" /></a></li>
          </ul>
        </div>
        <div>
            <ul className="flex gap-5 sm:gap-1 text-lg justify-center font-extralight items-center sm:flex-col">
                <li className="hover:underline"><Link to="/about">About Us</Link></li>
                <li className="hover:underline"><Link to="/events">Events</Link></li>
                <li className="hover:underline"><Link to="/upcomingevents">Upcoming Events</Link></li>
                <li className="hover:underline"><Link to="/gallery">Gallery</Link></li>
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
