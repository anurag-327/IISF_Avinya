import React, { useState } from 'react'
import { CaretUp,CaretDown } from 'phosphor-react'
const FAQCard = ({item}) => {
    const [isOpen,setOpen]=useState(false)
  return (
    <div onClick={() => setOpen(!isOpen)} className='  '>
        <div className={isOpen?"rounded-t-md row1 flex  bg-gray-900 justify-between w-full p-4 ":"rounded-md row1 flex bg-gray-900 justify-between w-full p-4 "}>
            <div className='question font-semibold w-[90%] break-words '>{item.question}</div>
            <div>
                {
                    isOpen?<CaretUp size={20} color="#ffffff" />:<CaretDown size={20} color="#ffffff" />
                }
            </div>
        </div>
        {
            isOpen&&<div className="row2 rounded-b-md bg-white text-black p-5">{item.answer}</div>
        }
        
    </div>
  )
}

export default FAQCard