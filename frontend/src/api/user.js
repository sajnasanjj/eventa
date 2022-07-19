import axios from 'axios'

import { BACKEND_URL } from '../constants/axios'

const API = axios.create({
  baseURL: `${BACKEND_URL}`,
  withCredentials: true,
})

export const addOrder = (orderData) => API.post('/addOrder', orderData)
export const getOrder = () => API.get('/getOrder')
