
import {createSlice,createAsyncThunk} from '@reduxjs/toolkit'
import adminAuthService from './adminAuthService'
const admin = JSON.parse(localStorage.getItem('admin'))
// const user = JSON.parse(localStorage.getItem('user'))
const initialState = {
    admin:admin ? admin : null,
    isError:false,
    isSuccess:false,
    isLoading:false,
    users:[],
    message:'',
}
export const adminregister = createAsyncThunk('adminauth/adminregister',async(adminData,thunkAPI)=>{
    try{
        console.log("admindata",adminData);
        return await adminAuthService.adminregister(adminData)
    }catch(error){
        const message =(error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
       
    }
})


export const adminlogin = createAsyncThunk('adminauth/adminlogin',async(adminData,thunkAPI)=>{
    try{
        console.log("admindaata",adminData)
        return await adminAuthService.adminlogin(adminData)
    }catch(error){
        const message =(error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})
export const getUser = createAsyncThunk('adminauth/getUser',async(user,thunkAPI)=>{
    try{
        console.log("userdata to admin",user)
        return await adminAuthService.adminlogin(user)
    }catch(error){
        const message = (error.response && error.response.data && error.response.data.message) || error.message || error.toString()
        return thunkAPI.rejectWithValue(message)
    }
})



export const adminlogout = createAsyncThunk ('adminauth/adminlogout',async()=>{
         await adminAuthService.adminlogout()
})


export const adminAuthSlice = createSlice({
    name:'adminauth',
    initialState,
    reducers:{
        reset: (state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
            state.users= []
        }
    },
    extraReducers: (builder) => {
        builder
          .addCase(adminregister.pending,(state) => {
            state.isLoading = true
        })
        .addCase(adminregister.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.admin = action.payload

        })
        .addCase(adminregister.rejected,(state,action)=>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.admin = null
        })
        .addCase(adminlogin.pending,(state) => {
            state.isLoading = true
        })
        .addCase(adminlogin.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.admin = action.payload

        })
        .addCase(adminlogin.rejected,(state,action)=>{
            state.isLoading = false
            state.isError = true
            state.message = action.payload
            state.admin = null
        })
       
        .addCase(adminlogout.fulfilled, (state)=> {
            state.admin= null
        })

        
    }
})

export const { reset } = adminAuthSlice.actions
export default adminAuthSlice.reducer