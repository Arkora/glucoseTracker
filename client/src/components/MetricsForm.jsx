import React,{useState} from 'react'
import { addMetric} from '../api'
import { setMetrics } from '../redux/actions/metricsActions'
import { useDispatch } from 'react-redux'


const MetricsForm = ({user}) => {
  const [metric, setMetric] = useState({id:user.id,glucose:0})  
  const dispatch = useDispatch()
  const postMetric = async(e) =>{
    try {
      
      await addMetric(metric)      
      dispatch(setMetrics(user.id))
      e.preventDefault()
     
    } catch (error) {
      console.log(error.respones.data)
    }
  }



  return (
    <div className='mt-2'>
      <form>
        <div className='grid grid-cols-2 gap-2'>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
              for="grid-password"
            >
              Glucose
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="username"
              type="text"  
              onChange={(e) => setMetric({...metric,glucose:e.target.value})}         
            />
            </div>
        </div>
        <div>
        <button className="shadow bg-blue-600 hover:bg-blue-400 focus:shadow-outline focus:outline-none text-white font-bold mt-8 py-1 px-1 rounded"
                type="button" onClick={(e)=>postMetric()} >Add</button> 
        </div>

        </div>
      </form>
    </div>
  )
}

export default MetricsForm