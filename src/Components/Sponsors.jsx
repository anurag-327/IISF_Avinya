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
    <div className='  w-[80%] sm:w-[95%] flex flex-col  sm:gap-0 text-center m-auto'>
         <div className='bg-white rounded-t-md text-black p-2'>
            <h2 className='text-4xl text-center font-bold'>Our Sponsors</h2>
        </div>
        <Marquee className='bg-white mt-2 rounded-b-md'>
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