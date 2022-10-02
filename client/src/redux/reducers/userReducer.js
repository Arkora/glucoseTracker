import {LOGIN,LOGOUT} from '../constants/actionTypes'

export const userReducer = (state = {user:{id:"",firstname:"",lastname:"",role:""}}, {type,payload}) => {
    switch (type) {
      case LOGIN:       
        state.user.id =payload.id
        state.user.firstname =payload.firstname
        state.user.lastname =payload.lastname
        state.user.role =payload.role
      return {...state}
      case LOGOUT:
        state.user.id =""
        state.user.firstname =""
        state.user.lastname =""
        state.user.role =""
        return{...state}
      
      default:
        return state
    }
  };