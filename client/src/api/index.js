import axios from 'axios'

const API = axios.create({ baseURL: 'http://localhost:8000' })

export const getMetrics = (id) => API.get(`/user/get_id/${id}`)
export const getAllUsers = () => API.get("/user/all")
export const register = (user) => API.post("/user/signup",user)
export const login = (credentials) => API.post("/user/login",credentials)
export const addMetric = (metric) => API.post("/metric/add",metric)
export const deleteMetric = (id) => API.delete(`metric/delete/${id}`)
export const updateMetric = (id,metric) => API.patch(`/metric/update/${id}`,{glucose:Number(metric)})


