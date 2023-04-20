import React from "react";
import Navbar from "../Components/Navbar";
import Footer from "../Components/Footer";
import mainEvent from "../assets/data/MainEvent";
import RegistrationForm from "../Components/RegistrationForm";
const Register = () => {
 
  return (
    <div>
      <Navbar />
      {
        mainEvent.registrattion ?(<RegistrationForm /> ):(<div className='text-4xl sm:text-2xl text-center font-poppins mx-auto mt-20'> Registration Closed⌚</div>)
      }
      <Footer/>
    </div>
  );
};

export default Register;
