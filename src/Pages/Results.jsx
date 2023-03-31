import React from 'react'
import Navbar from '../components/Navbar'
import result from '../assets/Results'
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
    <div className='flex flex-col justify-center items-center'>
        {
            result.length>0 && <Confetti
            width={window.innerWidth}
            height={window.innerHeight}
            numberOfPieces={1000}
            recycle={false}
          /> 
        }
        <Navbar />
        <div className='w-[80%] md:w-[90%] mt-10 sm:w-[95%] text-center '>
            <h1 className='text-4xl font-bold'>Results</h1>
            <div className='flex flex-col w-full mt-10 gap-2 justify-center items-center'>
                {
                    result.length>0?(result.map(item => <ResultCard item={item} key={item.rank} />)):<h1 className='text-2xl '>Results will be declared Shortly</h1>
                }
            </div>
        </div>
    </div>
  )
}

export default Results