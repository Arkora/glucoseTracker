import React,{useState} from 'react'
import moment from 'moment'
import {useDispatch} from 'react-redux'
import { deleteMetric,updateMetric } from '../api'
import { setMetrics } from '../redux/actions/metricsActions'
import {IoTrashBinSharp} from 'react-icons/io5'
import {MdEdit} from 'react-icons/md'

const Metric = ({metric,user}) => {
 const [edit, setEdit] = useState(false)
 const [newValue, setNewValue] = useState(0) 
 const toggle = () =>{
        setEdit(!edit)        
 }
 const dispatch = useDispatch()
 const remove = async (id) =>{
        try {
                await deleteMetric(id)
                dispatch(setMetrics(user.id))
                
        } catch (error) {
                console.log(error.respones.data)    
        }
 }

 const update = async () =>{
    try {
        
        await updateMetric(metric._id,newValue)
        dispatch(setMetrics(user.id))
    } catch (error) {
        console.log(error.respones.data)
    }
 }

  return (
    <div className='grid grid-cols-3 gap-2 mt-2 overflow-y'>
                        <div>Date: {moment(metric.created).format('D /MM /YY, h:mm a')}</div>
        <div>Glucose: {metric.glucose} mg</div>
        <div col-span-2>
        <button className="shadow bg-blue-600 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold  px-1 rounded"
                type="button" onClick={(e)=>remove(metric._id)}><IoTrashBinSharp /></button> 
        <button className="shadow bg-blue-600 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold ml-2 px-1 rounded"
                type="button" onClick={toggle} ><MdEdit /></button> 
        </div>
        {edit ? (
                <div col-span-2>
                <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="username"
              type="text"
              placeholder={metric.glucose}  
              onChange={(e) => setNewValue(e.target.value)}         
            />
                <button className="shadow bg-blue-600 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold ml-2 px-1 rounded"
                        type="button" onClick={update} >Update</button> 
                </div>
        ) : (<></>)}

        </div>
  )
}

export default Metric