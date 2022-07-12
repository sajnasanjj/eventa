import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import bannerService from './bannerService';


const initialState ={
    banners:[],
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:'',

}
export const getBanner = createAsyncThunk('getbannerr',async(thunkAPI)=>{
    try{
        console.log("kitti")
            return await bannerService.getBanner();

    }catch(error){
            const message =(error.response && error.response.data && error.response.data.message) || error.message || error.toString() || 'Something wrong';
            return thunkAPI.rejectWithValue(message)

    }
});
export const editBanner = createAsyncThunk('editbanner',async(thunkAPI)=>{
    try{
        console.log("Its going to update")
        return await bannerService.editBanner();
    }catch(error){
            const message =(error.response && error.response.data && error.response.data.message) || error.message || error.toString() || 'Something wrong';
            return thunkAPI.rejectWithValue(message)
    }
})
const bannerSlice = createSlice({
    name:'getbannerr',
    initialState,
    reducers:{
        reset:(state) => {
            state.isLoading = false
            state.isError = false
            state.isSuccess = false
            state.message = ''
        }
    },
    extraReducers:(builder)=>{
        builder
        .addCase(getBanner.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(getBanner.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.banners = action.payload;
        })
        .addCase(getBanner.rejected,(state,action)=>{
            state.isSuccess = false;
            state.isError = true;
            state.message = action.payload;
            state.banners = null

        })
        .addCase(editBanner.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(editBanner.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.banners = action.payload;
        })
        .addCase(editBanner.rejected,(state,action)=>{
            state.isSuccess = false;
            state.isError = true;
            state.message = action.payload;
            state.banners = null

        })
    }
})
export const { reset } = bannerSlice.actions;
export default bannerSlice.reducer;
