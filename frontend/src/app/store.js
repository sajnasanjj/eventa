import { configureStore } from '@reduxjs/toolkit'
import authReducer from '../features/auth/authSlice'
import adminAuthReducer from '../features/auth/adminAuthSlice'
import getUserReducer from '../features/auth/admin/getUser/getUserAuthSlice'
import getBannerReducer from '../features/auth/admin/banner/bannerSlice'
import editBannerReducer from '../features/auth/admin/banner/bannerSlice'
import getGalleryReducer from '../features/auth/admin/Gallery/gallerySlice'
import getServiceReducer from '../features/auth/admin/serviceProvide/serviceSlice'
import getAlbumReducer from '../features/auth/admin/Album/albumSlice'
import getOrderReducer from '../features/auth/user/orderSlice'
export const store = configureStore({
  reducer: {
    auth: authReducer,
    adminauth: adminAuthReducer,
    alluser: getUserReducer,
    getbannerr: getBannerReducer,
    editbanner: editBannerReducer,
    getgallery: getGalleryReducer,
    allservice: getServiceReducer,
    allalbum: getAlbumReducer,
    allorder: getOrderReducer,
  },
})
