import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import galleryService from './galleryService';
import { errorHandler } from '../../../../utils/errorMessage';

const initialState ={
    gallarys:[],
    isError:false,
    isSuccess:false,
    isModified:false,
    isLoading:false,
    message:'',

}
export const getGallery = createAsyncThunk('getgallary',async(data,thunkAPI)=>{
    try{
        console.log("kitti")
            return await galleryService.getGallery();
    }catch(error){
        console.log(error)
      return thunkAPI.rejectWithValue(errorHandler(error));
    }
});

export const addGallery = createAsyncThunk('addgallery',async(gallaryData,thunkAPI)=>{
    try{
        console.log("okk");
        return await galleryService.addGallery(gallaryData)
    }catch(error){
      return thunkAPI.rejectWithValue(errorHandler(error))
    }
})
export const deleteGallery = createAsyncThunk('deletegallery',async(gallaryId,thunkAPI)=>{
     try{
        console.log("delte",gallaryId)

        return await galleryService.deleteGallery(gallaryId);

    }catch(error){
      return thunkAPI.rejectWithValue(errorHandler(error))

    }
})
const gallerySlice = createSlice({
    name:'getgallery',
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
        .addCase(getGallery.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(getGallery.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.gallarys = action.payload;
        })
        .addCase(getGallery.rejected,(state,action)=>{
            state.isSuccess = false;
            state.isError = true;
            state.message = action.payload;
            state.gallarys = null

        })
       
        .addCase(addGallery.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(addGallery.fulfilled,(state)=>{
            state.isSuccess = true;
            state.isLoading = true;

        })
        .addCase(addGallery.rejected,(state,action)=>{
            state.isError = true;
            state.isLoading=false;
            state.isSuccess=false;
            state.message = action.payload;
        })
        .addCase(deleteGallery.pending,(state)=>{
            state.isLoading = true;
            state.isSuccess = false;
        })
        .addCase(deleteGallery.fulfilled,(state,action)=>{
            const itemId = action.payload.gallaryId;
        console.log("itemId", itemId);
        state.getgallery.gallarys = state.getgallery.gallarys.filter(
          (item) => item._id !== itemId
        );

        })
        .addCase(deleteGallery.rejected,(state,action)=>{
            state.isError = true;
            state.isLoading=false;
            state.isSuccess=false;
            state.message = action.payload;
            state.gallarys=null
        })

        
    }
})
export const { reset } = gallerySlice.actions;
export default gallerySlice.reducer;
