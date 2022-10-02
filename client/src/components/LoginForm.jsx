import React,{useState} from 'react'
import { useNavigate } from "react-router-dom"
import {useDispatch} from 'react-redux'
import {getCredentials} from '../redux/actions/userActions'
import { login } from '../api'

const LoginForm = ({setToggle}) => {
    const navigate = useNavigate()
    const [user, setUser] = useState({username:"",password:""})
    const dispatch = useDispatch()

    const signin = async() =>{
      try {
        const {data} = await login(user)
        dispatch(getCredentials(data))
        console.log(data.role)
        if(data.role === "admin")  {
          navigate("/admin")
        }else{
          navigate("/user")
        }
      } catch (error) {
        alert(error.response.data)
      }     
       
    }


  return (
    <div className='flex w-1/2 m-auto h-full' >
     <div className='m-auto border-2 rounded-xl border-black'>
      <h1 className='font-medium leading-tight text-3xl m-auto pt-6 ml-6 text-blue-600'>Login</h1>
      <form className="w-full max-w-lg m-auto mt-20 p-2  ">
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
                type="button" onClick={signin}>Login</button>        
      </form>
      <div className='grid grid-cols-2 gap-2'>
        <h3>New Member</h3>
        <h3 className='text-blue-600 cursor-pointer' onClick={(e)=>setToggle(false)}>Register</h3>
      </div>
     </div>
    </div>
  )
}

export default LoginForm