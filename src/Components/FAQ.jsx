import React from 'react'
import faqquestions from '../assets/FAQ'
import FAQCard from "./FAQCard"
const FAQ = () => {
  return (
    <div className=' w-[70%] md:w-[90%] mx-auto sm:w-full bg-gray-800 p-4 rounded-md '>
      <h2 className='text-3xl font-poppins font-bold'>Frequently Asked Questions</h2>
      <hr className='mt-1'></hr>
      <div className='flex mt-5 flex-col gap-2'>
      {
        faqquestions.map(item => <FAQCard key={item.id} item={item} />)
      }
      </div>
    </div>
  )
}

export default FAQ