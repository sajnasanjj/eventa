import axios from 'axios';


import { BACKEND_URL } from '../constants/axios';
const API = axios.create({baseURL:`${BACKEND_URL}`,withCredentials:true,});


export const registerAdmin =()=>API.post('/adminlogin/registerAdmin')
export const getUser = () => API.get('/adminlogin/getUser')
export const editBanner=(bannerData,bannerId)=>API.put(`/adminlogin/editBanner/${bannerId}`,bannerData)
export const deleteBanner=(bannerId)=> API.delete(`/adminlogin/deleteBanner/${bannerId}`)

export const addBanner=(bannerData)=> API.post('adminlogin/addBanner',bannerData)
export const getBanner=()=> API.get('/adminlogin/getBanner')
export const getGallary=()=>API.get('/adminlogin/getGallaryDetails')

export const getService = () => API.get(`adminlogin/getService`)
export const addService =(serviceData) => API.post(`/adminlogin/addService`)

export const deleteService = (serviceId) => API.delete(`/adminlogin/deleteService/${serviceId}`)
export const editService = (serviceId) => API.put(`/adminlogin/editService/${serviceId}`)