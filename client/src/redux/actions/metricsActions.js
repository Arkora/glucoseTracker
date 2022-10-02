import {GET_USER} from '../constants/actionTypes'
import { getMetrics } from '../../api'

export const setMetrics = (id) =>async(dispatch) =>{
    try {
        const { data } = await getMetrics(id)
        dispatch({ type:GET_USER, payload: data })
    } catch (error) {
        console.log(error.response.data)
    }    
}

