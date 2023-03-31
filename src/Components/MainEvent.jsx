import React from 'react'
import { Link } from 'react-router-dom'
import Logo from "../assets/Images/Logo.png"
const MainEvent = () => {
  return (
    <div className='w-[80%] sm:w-[95%] mx-auto text-center border-2 border-blue-400 rounded-2xl  bg-transparent'>
       <div className='text-4xl font-bold p-2 bg-white rounded-t-2xl text-black'>ABOUT SRIJAN</div>
       <div className='flex sm:flex-col justify-center items-center'>
            <div className=''>
              <img className='w-full' src={Logo} alt="event poster"/>
            </div>
            <div className='w-[80%] flex flex-col gap-1 justify-center text-justify p-5 sm:p-0 items-center'>
              <h1 className='text-3xl text-blue-500 font-bold'>About SRIJAN</h1>
              <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Omnis deleniti quisquam possimus commodi magni eaque minus sit vero assumenda magnam, in ea. Qui molestiae fugit ea tenetur? Quod doloribus repudiandae, eum corporis tempora veniam enim similique consequuntur sapiente nemo alias facere nostrum quae deserunt minus quidem. Laboriosam dolores eligendi culpa error in dolorum corporis, quibusdam atque eaque dolorem accusamus tempore.</p>
              
              <div className='flex justify-end mt-5 gap-5'>
                  <a href="#" type="button" className="text-white   bg-pink-600 hover:bg-blue-500 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2">EVENT DETAILS</a>
                  <Link to="/register" className="relative inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                       <span className="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                       REGISTER HERE
                      </span>
                  </Link>
              </div>
            </div>
       </div>
    </div>
  )
}

export default MainEvent