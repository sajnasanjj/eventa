import axios from 'axios';
import { BACKEND_URL } from '../constants/axios';
const API = axios.create({baseURL:`${BACKEND_URL}`,withCredentials:true,});
console.log("apiii",API)


export const getUser = () => API.get('/adminlogin/getUser')
export const editUser=(userData,userId)=>API.put(`/edit-user/${userId}`,userData)
