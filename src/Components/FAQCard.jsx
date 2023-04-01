import React, { useState } from 'react'
import { CaretUp,CaretDown } from 'phosphor-react'
const FAQCard = ({item}) => {
    const [isOpen,setOpen]=useState(false)
    function open()
    {
        setOpen(!isOpen)
    }
  return (
    <div  className='border break-words  whitespace-pre-wrap border-gray-600 rounded-md  '>
        <div onClick={open } className={isOpen?"rounded-t-md cursor-pointer row1 flex  bg-gray-900 justify-between w-full p-5 ":"rounded-md row1 cursor-pointer flex bg-gray-900 justify-between w-full p-5 "}>
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