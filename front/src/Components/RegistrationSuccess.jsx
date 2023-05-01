import React from 'react'

const RegistrationSuccess = (props) => {
  console.log(props.teamid);
  return (
    
    <div className="bg-gray-100 w-[400px] sm:w-[350px] rounded-md mx-auto mt-8 ">
      <div className="bg-white p-6 rounded-lg  md:mx-auto">
        <svg viewBox="0 0 24 24" className="text-green-600 w-16 h-16 mx-auto my-6">
            <path fill="currentColor"
                d="M12,0A12,12,0,1,0,24,12,12.014,12.014,0,0,0,12,0Zm6.927,8.2-6.845,9.289a1.011,1.011,0,0,1-1.43.188L5.764,13.769a1,1,0,1,1,1.25-1.562l4.076,3.261,6.227-8.451A1,1,0,1,1,18.927,8.2Z">
            </path>
        </svg>
        <div className="text-center">
            <h3 className="md:text-2xl text-base text-gray-900 font-semibold text-center">Team Registered!</h3>
            <p className="text-gray-600 my-2">Thank you for Registering.</p>
            <span className='text-black font-bold'>Team ID: {props.teamid}</span>
            <div className="py-8 text-center">
                <a href="https://chat.whatsapp.com/K3R12XQ7f0WGBI8xAc72Tl" className="px-12 rounded-md bg-indigo-600 hover:bg-indigo-500 text-white font-semibold py-3">
                    Join Whatsapp Group 
               </a>
            </div>
            {/* <a href="" className=' block bg-blue-500 font-bold mt-4 p-3 rounded-md'>Teams</a> */}
            {/* <p className=' mt-4 text-red-600'>We advice you copying TeamID.</p> */}
            <p className=' mt- font-bold text-red-600'>Team ID confirms your team registration...</p>
            <div className="py-10 text-center">
                <a href="/" className="px-12 bg-gray-600 rounded-md hover:bg-indigo-500 text-white font-semibold py-3">
                    GO BACK 
               </a>
            </div>
            
        </div> 
    </div>
  </div>
  )
}

export default RegistrationSuccess