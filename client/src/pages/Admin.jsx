import React,{useState,useEffect} from 'react'
import {useSelector} from 'react-redux'
import Header from '../components/Header'
import AdminDashboard from '../components/AdminDashboard'
import { getAllUsers } from '../api'
import UserMetrics from '../components/UserMetrics'


const Admin = () => {
  const user = useSelector((state) => state.userReducer.user)  
  const [users, setUsers] = useState([])
  const fetchUsers = async() =>{
    try {
      const {data} = await getAllUsers()
      setUsers(data)      
    } catch (error) {
      console.log(error.response.data)
    }
  }

  useEffect(()=>{
    fetchUsers()   
  },[])
  return (
    <div className='overflow-hidden'>
      <Header user={user}/>
      <div className='mt-10 grid grid-cols-3 gap-4'>
        <div className='col-span-1'>
        <AdminDashboard />
        </div>
        <div className='col-span-2 overflow-auto'> 
          {users.length? (users.map((user)=>{
            return(<UserMetrics user={user} />)
          })):(<h1>0 Users</h1>)}         
          
        </div>
      </div>
    </div>
  )
}

export default Admin