import React from 'react'
import { Link } from 'react-router-dom';
import mainEvent from '../assets/data/MainEvent';
const Navbar = () => {
  function openDrawer()
  {
      document.getElementById("navdrawer").classList.toggle("sm:hidden");
  }
  return (
    <div className="shadow-lg  items-center bg-gray-900 sticky top-0 z-10  w-full  sm:flex-col   justify-between p-3 flex">
    <div className='flex sm:w-full items-center justify-between'>
      <h2 className="text-5xl font-bold font-poppins bg-gradient-to-l from-orange-200 to-blue-400 via-pink-200 bg-clip-text text-transparent">{mainEvent.name}</h2>
      <div className=' hidden sm:block'>
            <button onClick={openDrawer}><i className="fa-solid fa-bars"></i></button>
       </div>   
    </div>
    <ul id="navdrawer" className='flex gap-10 sm:flex-col text-xl font-poppins   sm:hidden  sm:text-center duration-500 md:text-center'>
    <li className=''><Link to="/" className="group  transition duration-300">
        Home
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
      </Link></li>
      <li className=''><Link to="/about" className="group  transition duration-300">
        About Us
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
      </Link ></li>
      <li className=''><Link to="/gallery" className="group  transition duration-300">
        Gallery
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
      </Link ></li>
      
      <li className=''><Link to="/sponsors" className="group  transition duration-300">
        Sponsors
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
      </Link ></li>
      <li className=''><Link to="/contact" className="group  transition duration-300">
        Contact
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
      </Link ></li>
      <li className=''><Link to="/results" className="group  transition duration-300">
        Results
        <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-sky-600"></span>
      </Link ></li>
   </ul>       
</div>
  )
}

export default Navbar
