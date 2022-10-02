import React,{useState} from 'react'
import { useNavigate } from "react-router-dom"
import {register} from '../api/index'

const SignupForm = ({setToggle}) => {

  const [user, setUser] = useState({firstname:"",lastname:"",username:"",password:""})

  const navigate = useNavigate()

  const signUp = async () =>{
    console.log(user)
    try {
      const {data} = await register(user)
      alert(data)
      navigate("/")
    } catch (error) {
      alert(error.response.data)
    }
  }

  return (
    <div className='flex w-1/2 m-auto h-full' >
     <div className='m-auto border-2 rounded-xl border-black'>
      <h1 className='font-medium leading-tight text-3xl m-auto pt-6 ml-6 text-blue-600'>Sign Up</h1>
      <form className="w-full max-w-lg m-auto mt-20 p-2  ">
      <div className='grid grid-cols-2 gap-1'>
      <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="username"
              type="text" 
              onChange={(e) => setUser({...user,firstname: e.target.value})}          
            />
            </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="username"
              type="text" 
              onChange={(e) => setUser({...user,lastname: e.target.value})}          
            />
            </div>
        </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Username
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="username"
              type="text"    
              onChange={(e) => setUser({...user,username: e.target.value})}       
            />
            </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Password
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="password"
              type="password"  
              onChange={(e) => setUser({...user,password: e.target.value})}         
            />
            </div>
        </div>
        <button className="shadow bg-blue-600 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button" onClick={signUp}>Sign Up</button>        
      </form>
      <div className='grid grid-cols-2 gap-2'>
        <h3>Already User</h3>
        <h3 className='text-blue-600 cursor-pointer' onClick={(e)=>setToggle(true)}>Login</h3>
      </div>
     </div>
    </div>
  )
}

export default SignupForm