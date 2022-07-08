import { createSlice,createAsyncThunk } from '@reduxjs/toolkit';
import getUserAuthService from './getUserAuthService';
const initialState ={
    

    isError : false,
    isSuccess :false,
    isLoading :false,
    message: '',
    users : [],

}
export const getUser = createAsyncThunk('alluser',async(thunkAPI)=>{
    try{    
            return await getUserAuthService.getUser();
    }catch(error){
            const message =(error.response && error.response.data && error.response.data.message) || error.message || error.toString() || 'Something wrong';
            return thunkAPI.rejectWithValue(message)
    }
})
 
export const getUserAuthSlice = createSlice({
    name:'alluser',
    initialState,
    reducers:{
        reset:(state)=>{
            state.isLoading = false
            state.isError =false
            state.isSuccess = false
            state.message = ''
            
        }
    },
    extraReducers:(builder) =>{
        builder
         .addCase(getUser.pending,(state) => {
            state.isLoading = true
        })
        .addCase(getUser.fulfilled,(state,action)=>{
            state.isLoading = false
            state.isSuccess = true
            state.users = action.payload

        })
        .addCase(getUser.rejected,(state,action)=>{
            state.isLoading = false
            state.isSuccess = false
            state.isError = true
            state.message = action.payload
            state.users = null
        })
    }
})

    
export const { reset } = getUserAuthSlice.actions;
export default getUserAuthSlice.reducer;