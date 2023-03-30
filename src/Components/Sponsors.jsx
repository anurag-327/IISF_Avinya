import React from 'react' 
import Marquee from "react-fast-marquee";
import brand1 from "../assets/Sponsors/brand-01.png"
import brand2 from "../assets/Sponsors/brand-02.png"
import brand3 from "../assets/Sponsors/brand-03.png"
import brand4 from "../assets/Sponsors/brand-04.png"
import brand5 from "../assets/Sponsors/brand-05.png"
import brand6 from "../assets/Sponsors/brand-06.png"
import brand7 from "../assets/Sponsors/brand-07.png"
import brand8 from "../assets/Sponsors/brand-08.png"
function Sponsors()
{
    return(
    <div className='  w-[75%] sm:w-full flex flex-col gap-2 text-center m-auto'>
        <h2 className='text-4xl font-bold text-blue-300'>Our Sponsors</h2>
        <Marquee className='bg-gray-300'>
           <img src={brand1}  className="mx-4 w-20" />
           <img src={brand2}  className="mx-4 w-20" />
           <img src={brand3}  className="mx-4 w-20" />
           <img src={brand4}  className="mx-4 w-20" />
           <img src={brand5}  className="mx-4 w-20" />
           <img src={brand6}  className="mx-4 w-20" />
           <img src={brand7}  className="mx-4 w-20" />
           <img src={brand8}  className="mx-4 w-20" />
        </Marquee>
    </div>
    )
}
export default Sponsors