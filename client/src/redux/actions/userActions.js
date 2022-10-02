import { LOGIN,LOGOUT } from "../constants/actionTypes";


export const getCredentials = (data)=>{ 
        
    return ({ type: LOGIN, payload:data  })
  
}

export const logout = () =>{
    return({type:LOGOUT,payload:{}})
}