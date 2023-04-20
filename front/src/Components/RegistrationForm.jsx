import React,{useState} from 'react'
import mainEvent from "../assets/data/MainEvent";
import Loader from "./Loader"
import RegistrationSuccess from './RegistrationSuccess';
const RegistrationForm = () => {
    const [loading,setLoading]=useState(false);
    const [success,setSuccess]=useState(false);
    const [errormsg,seterrorMsg]=useState("")
    const [teamid,setTeamid]=useState("")
    mainEvent.participatingcolleges.sort();
    async function handleregistration(e) 
    {
        e.preventDefault();
        setLoading(true);
        let data = new FormData(e.target);
        let{ teamname,college, collegename, email,mobile,member1,member1year, member2,member2year, member3,member3year } = Object.fromEntries(data.entries());
        collegename=mainEvent.participatingcolleges[college]
        const team={
          teamName:teamname,
          college:collegename,
          email:email,
          mobileNumber:mobile,
          participants:[{name:member1,year:member1year},{name:member2,year:member2year},{name:member3,year:member3year}]
        }
        let options={
          method:"POST",
          headers:{
              "content-type":"application/json"
          },
          body:JSON.stringify(team)
      }
      
      const response=await fetch(`https://iisfavinya-production.up.railway.app/team/register`,options);
      const ans= await response.json();
      if(ans.status==200)
      {
        e.target.reset()
        setLoading(false)
        seterrorMsg(ans.message)
        setTeamid(ans.teamId)
        setSuccess(true)
      }
      else if(ans.status==409)
      {
        setLoading(false)
        seterrorMsg(ans.message)
        console.log(ans)
      }
      else
      {
        setLoading(false)
        seterrorMsg(ans.message)
      }
      }
  return (
    <div>
      {
      success?(<div className='w-screen  flex justify-center items-center'><RegistrationSuccess teamid={teamid}/></div>):(<form
        onSubmit={handleregistration}
        className="w-[60%] max-w-[800px]  2xl:w-[40%] sm:w-full  mx-auto mt-3 sm:mt-0   rounded-md bg-gray-200 p-3"
      >
        <div>
          <h2 className="mx-auto text-center text-black text-4xl mb-1 font-bold">
            REGISTRATION FORM
          </h2>
          <img
            className="w-[250px] aspect-square mx-auto  rounded-full object-cover"
            src={mainEvent.logo}
            alt="event Logo"
          />
        </div>
        <div className="w-full mb-3">
          <label
            className="block uppercase text-black text-xs font-bold mb-2"
            htmlFor="teamname"
          >
            Team Name
          </label>
          <input
            type="text"
            id="teamname"
            name="teamname"
            autoComplete="on"
            className="px-3 py-3 placeholder-gray-500 outline-none resize-none text-black bg-white rounded text-sm shadow focus:shadow-lg w-full "
            placeholder="First Name"
            required
          />
        </div>
        <div className="w-fullmt-3 ">
          <label
            className="block uppercase text-black text-xs font-bold mb-2"
            htmlFor="member1"
          >
            Member 1 
          </label>
          <input
            type="text"
            id="member1"
            name="member1"
            autoComplete="on"
            className="px-3 py-3 placeholder-gray-500 outline-none resize-none text-black bg-white rounded text-sm shadow focus:shadow-lg w-full "
            placeholder="Member 1"
            required
          />
          <div className="w-full mt-1">
         
          <select
            className="px-3 py-3 placeholder-gray-500 outline-none resize-none text-black bg-white rounded text-sm shadow focus:shadow-lg w-full "
            id="member1year"
            name="member1year"
          >
            <option defaultValue="" value="1">
              First Year
            </option>
            <option value="2">Second Year</option>
            <option value="3">Third Year</option>
            <option value="4">Fourth Year</option>
          </select>
        </div>
        </div>

        <div className="w-full mt-3 ">
          <label
            className="block uppercase text-black text-xs font-bold mb-2"
            htmlFor="member2"
          >
            Member 2
          </label>
          <input
            type="text"
            id="member2"
            name="member2"
            autoComplete="on"
            className="px-3 py-3 placeholder-gray-500 outline-none resize-none text-black bg-white rounded text-sm shadow focus:shadow-lg w-full "
            placeholder="Member 2"
            required
          />
          <div className="w-full mt-1">
         
          <select
            className="px-3 py-3 placeholder-gray-500 outline-none resize-none text-black bg-white rounded text-sm shadow focus:shadow-lg w-full "
            id="member2year"
            name="member2year"
          >
            <option defaultValue="" value="1">
              First Year
            </option>
            <option value="2">Second Year</option>
            <option value="3">Third Year</option>
            <option value="4">Fourth Year</option>
          </select>
        </div>
        </div>

        <div className="w-full mt-3 ">
          <label
            className="block uppercase text-black text-xs font-bold mb-2"
            htmlFor="member3"
          >
            Member 3
          </label>
          <input
            type="text"
            id="member3"
            name="member3"
            autoComplete="on"
            className="px-3 py-3 placeholder-gray-500 outline-none resize-none text-black bg-white rounded text-sm shadow focus:shadow-lg w-full "
            placeholder="Member 3"
            required
          />
          <div className="w-full mt-1">
         
          <select
            className="px-3 py-3 placeholder-gray-500 outline-none resize-none text-black bg-white rounded text-sm shadow focus:shadow-lg w-full "
            id="member3year"
            name="member3year"
          >
            <option defaultValue="" value="1">
              First Year
            </option>
            <option value="2">Second Year</option>
            <option value="3">Third Year</option>
            <option value="4">Fourth Year</option>
          </select>
        </div>
        </div>

       
        <div className="w-full mb-3 mt-3">
          <label
            className="block uppercase text-black text-xs font-bold mb-2"
            htmlFor="college"
          >
            College
          </label>
          <select
            className="px-3 py-3 placeholder-gray-500 outline-none resize-none text-black bg-white rounded text-sm shadow focus:shadow-lg w-full "
            id="college"
            name="college"
          >
            {
              mainEvent.participatingcolleges.map((item,index)=> <option key={index} defaultValue="" value={index}>
              {item}
            </option>)
            }
          </select>
          {/* <input
            type="text"
            id="collegename"
            name="collegename"
            autoComplete="on"
            className="px-3 py-3 mt-2 placeholder-gray-500 outline-none resize-none text-black bg-white rounded text-sm shadow focus:shadow-lg w-full "
            placeholder="College Name"
            required
          /> */}
        </div>
        <div className="w-full mb-3">
          <label
            className="block uppercase text-black text-xs font-bold mb-2"
            htmlFor="email"
          >
            Email
          </label>
          <input
            type="email"
            id="email"
            name="email"
            autoComplete="on"
            className="px-3 py-3 placeholder-gray-500 outline-none resize-none text-black bg-white rounded text-sm shadow focus:shadow-lg w-full "
            placeholder="Email"
            required
          />
        </div>

        <div className="w-full mb-3">
          <label
            className="block uppercase text-black text-xs font-bold mb-2"
            htmlFor="mobile"
          >
            Mobile Number
          </label>
          <input
            type="text"
            id="mobile"
            name="mobile"
            autoComplete="on"
            className="px-3 py-3 placeholder-gray-500 text-black bg-white rounded text-sm outline-none resize-none shadow focus:shadow-lg w-full "
            placeholder="Mobile Number"
            required
          />
        </div>
        {/* <div className="w-full mb-3">
          <label
            className="block uppercase text-black text-xs font-bold mb-2"
            htmlFor="city"
          >
            City
          </label>
          <input
            type="text"
            id="city"
            name="city"
            autoComplete="on"
            className="px-3 py-3 placeholder-gray-500 text-black bg-white rounded text-sm outline-none resize-none shadow focus:shadow-lg w-full "
            placeholder="City"
            required
          />
        </div> */}
        <div className='text-center font-semibold text-red-700'>
          <span>{errormsg}</span>
        </div>
        <div className="w-[100px] mx-auto">
          {
            loading?<Loader />:<button
            className="bg-blue-600 w-full  px-3 py-2 rounded-md mx-auto"
            type="submit"
          >
            Submit
          </button>
          }
          
        </div>
      </form>)
    }
    </div>
    
    
  )
}

export default RegistrationForm