import axios from 'axios'


import { BACKEND_URL } from '../constants/axios';

const API = axios.create({
  baseURL: `${BACKEND_URL}/user`,
  withCredentials: true,
})



// export const registerUser = (userData) => API.post(USER_REGISTER, userData)
// export const loginUser = (userdata) => API.post(USER_LOGIN, userdata)