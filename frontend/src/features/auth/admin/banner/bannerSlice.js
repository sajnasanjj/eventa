import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import bannerService from './bannerService';
import {errorHandler} from '../../../../utils/errorMessage'

const initialState ={
    banners:[],
    isError:false,
    isSuccess:false,
    isLoading:false,
    isModified:false,
    isDeleted:false,
    message:''

}
export const getBanner = createAsyncThunk('bannerthunk',async(data,thunkAPI)=>{
    try{
        console.log("yupppp")
            return await bannerService.getBanner();
    }catch(error){
      return thunkAPI.rejectWithValue(errorHandler(error));
    }
});

export const addBanner = createAsyncThunk('addbannerThunk/addBanner',async(bannerData,thunkAPI)=>{
    try{
        console.log("addeddd")
        return await bannerService.addBanner(bannerData);
    }catch(error){
      return thunkAPI.rejectWithValue(errorHandler(error));    }
})

export const editBanner = createAsyncThunk('editbanner',async(id,thunkAPI)=>{
    try{
        console.log("Its going to update")
        return await bannerService.editBanner(id);
    }catch(error){
      return thunkAPI.rejectWithValue(errorHandler(error));    }
});

export const deleteBanner = createAsyncThunk('deleteBanner',async(bannerId,thunkAPI)=>{
    try{
        console.log("delte",bannerId)

        return await bannerService.deleteBanner(bannerId);

    }catch(error){
      return thunkAPI.rejectWithValue(errorHandler(error));
    }
});

const bannerSlice = createSlice({
    name:'get-all-banner',
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
            state.isModified =false;
        })
        .addCase(editBanner.fulfilled,(state)=>{
            state.isLoading = false;
            state.isError = false;
            state.isModified = true;
        })
        .addCase(editBanner.rejected,(state,action)=>{
            state.isModified = false;
            state.isError = true;
            state.message = action.payload;
            state.isModified = false
        })


        .addCase(addBanner.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(addBanner.fulfilled,(state)=>{
            state.isSuccess = true;
            state.isLoading = true;

        })
        .addCase(addBanner.rejected,(state,action)=>{
            state.isError = true;
            state.isLoading=false;
            state.isSuccess=false;
            state.message = action.payload;
        })

        .addCase(deleteBanner.pending,(state)=>{
            state.isLoading = true;
            state.isDeleted = false;
        })
        .addCase(deleteBanner.fulfilled,(state,action)=>{
           const itemId = action.payload.gallaryId;
        console.log("itemId", itemId);
        state.getbannerr.banners = state.getbannerr.banners.filter(
          (item) => item._id !== itemId
        );

        })
        .addCase(deleteBanner.rejected,(state,action)=>{
            state.isError = true;
            state.isLoading=false;
            state.message = action.payload;
            state.banners= null
        })
    }
})
export const { reset } = bannerSlice.actions;
export default bannerSlice.reducer;
