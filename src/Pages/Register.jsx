import React from 'react'
import Navbar from "../Components/Navbar"
import Footer from "../Components/Footer"
const Register = () => {
  return (
    <div>
      <Navbar/>
      <form className='w-[80%] mx-auto'>
        <div>
          <label>Enter team name</label>
          <input type="text" placeholder='Enter Team Name'/>
        </div>
      </form>
      <Footer/>
    </div>
  )
}

export default Register