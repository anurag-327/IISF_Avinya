import React from 'react'
import Navbar from '../Components/Navbar'
import result from '../assets/data/Results'
import ResultCard from '../Components/ResultCard'
import Confetti from 'react-confetti'

const Results = () => {
    
    function compare( a, b ) {
        if ( a.rank < b.rank ){
          return -1;
        }
        if ( a.rank > b.rank ){
          return 1;
        }
        return 0;
      }
      result.sort( compare );
  return (
    <div className=''>
        {
            result.length>0 && <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            numberOfPieces={200}
            recycle={false}
          /> 
        }
        <Navbar />
        <div className='w-[80%] md:w-[90%] mx-auto mt-10 sm:w-[95%] text-center '>
            <h1 className='text-4xl font-bold'>Results</h1>
            <div className='flex flex-col w-full mt-10 gap-2 justify-center items-center'>
                {
                    result.length >0?(result.map((item,index) => <ResultCard  key={item.rank} item={item}  />)):<h1 className='text-2xl '>Results Not Declared</h1>
                }
            </div>
        </div>
    </div>
  )
}

export default Results