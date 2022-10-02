import React from 'react'
import {useSelector} from 'react-redux'
import Metric from './Metric'


const Metrics = ({user}) => {
 const metrics = useSelector((state) => state.metricsReducer.metrics)

  return (
    <div className='mt-2 overflow-auto h-screen' >
        {metrics.length ? (metrics.map((metric)=>{
                return(<Metric metric={metric} user={user}/>

                )
        }) ) : (<div><h1 className='mt-2'>No Metrics</h1></div>) }
        

    </div>
  )
}

export default Metrics