import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import adminAuthReducer from '../features/auth/adminAuthSlice'
import getUserReducer from '../features/auth/admin/getUser/getUserAuthSlice';
import getBannerReducer from '../features/auth/admin/banner/bannerSlice'
import editBannerReducer from '../features/auth/admin/banner/bannerSlice'
import getGalleryReducer from '../features/auth/admin/Gallery/gallerySlice'
export const store = configureStore({
  reducer: {
    auth:authReducer,
    adminauth:adminAuthReducer,
    alluser:getUserReducer,
    getbannerr:getBannerReducer,
    editbanner:editBannerReducer,
    getgallary:getGalleryReducer,
    
  },
}); 
