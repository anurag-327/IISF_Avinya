import React,{useEffect, useState} from 'react'
import Footer from '../Components/Footer'
import Navbar from '../Components/Navbar'
import ResultCard from '../Components/ResultCard'
const Teams = () => {
    const [teams,setTeams]=useState([]);

    useEffect(() =>
    {
        (async function()
        {
            const res=await fetch(`https://iisfavinya-production.up.railway.app/team/getteams`)
            const ans= await res.json()
            setTeams(ans);
        }())
    })
  return (
    <div>
        <Navbar />
        <div className='w-[80%] min-h-[25vh]  mt-10 mx-auto sm:w-[95%] flex flex-col justify-center items-center'>
            <h2 className='text-3xl text-center text-yellow-200'>Registered Teams</h2>
            {
                !teams?(<div className='mt-5 text-4xl sm:text-2xlName text-blue-300'> No teams Registered yet</div>):(<div className='mt-10 mx-auto w-full'>
                    <table className="table-auto   overflow-hidden  border-collapse border border-slate-500 mx-auto">
                    <thead>
                          <tr>
                          <th scope="col" className="px-6 py-3 border border-slate-300">Team name</th>
                          <th scope="col" className="px-6 py-3 border border-slate-300">Team Id</th>
                          <th scope="col" className="px-6 py-3 border sm:hidden border-slate-300">Email</th>
                          </tr>
                    </thead>  
                    <tbody>                    
                    {  
                        teams.map((item ,index) => (
                            <tr key={item._id}>
                               <th scope="col" className="px-6 py-3 border border-slate-300">{item.teamName}</th>
                               <th scope="col" className="px-6 py-3 border border-slate-300">{item._id}</th>
                               <th scope="col" className="px-6 py-3 border sm:hidden border-slate-300">{item.email}</th>
                             </tr>                         
                        ))
                    }
                    </tbody>
                    </table>
                </div>)
            }
        </div>
        <Footer/>
    </div>
  )
}

export default Teams