import {GET_USER} from '../constants/actionTypes'

export const metricsReducer = (state = {metrics:[]}, {type,payload}) => {
    switch (type) {
      case GET_USER:
      return{...state,metrics:payload.metrics}
      
      default:
        return state
    }
  };