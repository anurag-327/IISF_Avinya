import React, { useState } from "react";
import { Trophy, Crown, SmileyBlank } from "phosphor-react";
import { CaretUp, CaretDown } from "phosphor-react";
const ResultCard = ({item}) => {
  const [isOpen, setOpen] = useState(false);
  function open()
  {
    setOpen(!isOpen);
  }
  return (
    <div onClick={open} className="w-[60%] cursor-pointer max-w-[600px] z-100 relative sm:w-full flex flex-col bg-gradient-to-r from-blue-600 to-green-700 p-2 rounded-md">
      <div className={isOpen? "rounded-t-md row1 flex justify-between w-full p-2 ": "rounded-md row1 flex justify-between w-full p-2 "}>
        <div className=" flex gap-5">
          <h2>{item.rank}</h2>
          {
             item.rank === 1 || item.rank === 2 || item.rank === 3 ? (<Crown size={25} color="#ffffff" weight="fill" />) : (<SmileyBlank size={25} color="#000000" weight="fill" />)
          }
          <p className="font-bold">{item.winner}</p>
          <div onClick={() => setOpen(!isOpen)} className="absolute cursor-pointer right-4 "S>
            {
            isOpen ? (<CaretUp size={20} color="#ffffff" />) : (<CaretDown size={20} color="#ffffff" />)
            }
          </div>
        </div>
      </div>
      {
         isOpen && (<div className='flex text-black  justify-start sm:flex-col items-start gap-1 '>
         <div className='mx-5 font-bold'>Members:</div>
         {
             (item.members).map((mem,index) => <span key={index} className='sm:mx-5'>{mem}, </span>)
         }
        </div>)
      }
    </div>
  );
};

export default ResultCard;

