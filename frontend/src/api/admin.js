import axios from 'axios';

import { BACKEND_URL } from '../constants/axios';
const API = axios.create ({ baseURL:`${BACKEND_URL}`,withCredentials:true }) ;

export const registerAdmin = () => API.post ('/adminlogin/registerAdmin');
export const getUser = () => API.get ('/adminlogin/getUser');
export const changeUserStatus = (userId) => API.put (`/adminlogin/changeUserStatus/${userId}`);

export const editBanner = (bannerData,bannerId) => API.put (`/adminlogin/editBanner/${bannerId}`,bannerData);
export const deleteBanner = (bannerId) => API.delete (`/adminlogin/deleteBanner/${bannerId}`);
export const addBanner = (bannerData)=> API.post ('adminlogin/addBanner',bannerData);
export const getBanner = () => API.get ('/adminlogin/getBanner');

export const getGallery = ()=>API.get('/adminlogin/getGallery');
export const addGallery =(gallaryData) => API.post('/adminlogin/addGallery',gallaryData);
export const deleteGallery =(gallaryId)=>API.delete(`/adminlogin/deleteGallery/${gallaryId}`);

export const getService = () => API.get('/adminlogin/getService');
export const addService = (serviceData) => API.post('/adminlogin/addService',serviceData);
export const deleteService = (serviceId) => API.delete(`/adminlogin/deleteService/${serviceId}`);
export const editService = (serviceId) => API.put(`/adminlogin/editService/${serviceId}`);

export const getAlbum = () => API.get('/adminlogin/getAlbum');
export const addAlbum = (albumData) => API.post('/adminlogin/addAlbum',albumData);
export const deleteAlbum = (albumId) => API.delete(`/adminlogin/deleteAlbum/${albumId}`);
export const editAlbum = (albumId) => API.put(`/adminlogin/editAlbum/${albumId}`);
