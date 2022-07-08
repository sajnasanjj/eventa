import { configureStore } from '@reduxjs/toolkit';
import authReducer from '../features/auth/authSlice'
import adminAuthReducer from '../features/auth/adminAuthSlice'
import getUserAuthSlice from '../features/auth/users/getUserAuthSlice';
export const store = configureStore({
  reducer: {
    auth:authReducer,
    adminauth:adminAuthReducer,
    alluser:getUserAuthSlice,
   
  },
}); 
