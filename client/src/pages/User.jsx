import React,{useEffect} from 'react'
import UserDashboard from '../components/UserDashboard'
import MetricsForm from '../components/MetricsForm'
import Metrics from '../components/Metrics'
import Header from '../components/Header'
import {useSelector,useDispatch} from 'react-redux'
import { setMetrics } from '../redux/actions/metricsActions'

const User = () => {
  const user = useSelector((state) => state.userReducer.user)  
  const dispatch = useDispatch()
  
  useEffect(()=>{
    dispatch(setMetrics(user.id))
    
      
  }) 
 
  return (
    <div className='overflow-hidden'>
      <Header user={user}/>
      <div className='mt-10 grid grid-cols-3 gap-4'>
        <div className='col-span-1'>
        <UserDashboard />
        </div>
        <div className='col-span-2 overflow-auto'>
          <MetricsForm user={user} />
          <Metrics user={user}  />
        </div>
      </div>
    </div>
    

  )
}

export default User