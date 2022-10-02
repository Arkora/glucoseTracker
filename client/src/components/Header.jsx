import React from 'react'
import {useDispatch} from 'react-redux'
import { useNavigate } from "react-router-dom"

import { logout } from '../redux/actions/userActions'

const Header = ({user}) => {
  const navigate = useNavigate()
  const dispatch =useDispatch()
  

  const signout = () =>{
    dispatch(logout())
    navigate("/")
  }
  return (
    <div className='w-full grid grid-cols-3 max-h-20 '>
      <h1>Name: {user.firstname}</h1>
      <h1>Last Name: {user.lastname}</h1>
      <button className="shadow bg-blue-600 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold py-2 px-4 rounded"
                type="button" onClick={signout}>Logout</button> 
      
      
    </div>
  )
}

export default Header