import axios from 'axios'

import { BACKEND_URL } from '../constants/axios'

export const API = axios.create({
  baseURL: `${BACKEND_URL}`,
  withCredentials: true,
})
export const login = (userData) => API.post('/logins',userData)
export const register = (userData) => API.post('/register',userData)
export const addOrder = (orderData) => API.post('/addOrder',orderData)
export const getOrder = () => API.get('/getOrder')
export const getCart =()=>API.get('/getCart')
export const addCart=(cartData)=>API.post('/addCart',cartData)
