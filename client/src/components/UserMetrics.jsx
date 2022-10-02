import React,{useState} from 'react'
import moment from 'moment'
import {IoIosArrowDropdownCircle,IoIosCloseCircle} from 'react-icons/io'
 
const UserMetrics = ({user}) => {
  const [isClicked, setIsClicked] = useState(false)
  const toggle = () =>{
    setIsClicked(!isClicked)
  }
  return (
    <div className='border-4  rounded-md  mr-6 mt-2 '>
    <div className='grid grid-cols-3 gap-2 mt-6 overflow-y  '>      
      <h2>Name: {user.firstname}</h2>
      <h2>Last Name: {user.lastname}</h2>
      <button className="shadow bg-blue-600 w-8 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold  px-1 rounded"
                type="button" onClick={toggle}> {isClicked? <IoIosCloseCircle  size={20}/> : <IoIosArrowDropdownCircle size={20} />}</button>
    </div>
    {isClicked?(
      user.metrics.length ? (user.metrics.map((metric,i)=>{
        return( <div className='grid grid-cols-2 gap-2 mt-2 overflow-y '>
          
        <div>Date: {moment(metric.created).format('D /MM /YY, h:mm a')}</div>
        <div>Glucose: {metric.glucose} mg</div>
        <hr/>
        </div>)
       
})) : (<h2 className='mt-2'>No Metrics</h2>)
    ) : (<></>)}
    
    </div>
  )
}

export default UserMetrics