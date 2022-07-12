import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import galleryService from './galleryService';


const initialState ={
    gallarys:[],
    isError:false,
    isSuccess:false,
    isLoading:false,
    message:'',

}
export const getGallary = createAsyncThunk('getgallary',async(thunkAPI)=>{
    try{
        console.log("kitti")
            return await galleryService.getGallary();

    }catch(error){
            const message =(error.response && error.response.data && error.response.data.message) || error.message || error.toString() || 'Something wrong';
            return thunkAPI.rejectWithValue(message)

    }
});
export const editGallary = createAsyncThunk('editgallary',async(thunkAPI)=>{
    try{
        console.log("Its going to update")
        return await galleryService.editGallary();
    }catch(error){
            const message =(error.response && error.response.data && error.response.data.message) || error.message || error.toString() || 'Something wrong';
            return thunkAPI.rejectWithValue(message)
    }
})
const gallerySlice = createSlice({
    name:'getgallary',
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
        .addCase(getGallary.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(getGallary.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.gallarys = action.payload;
        })
        .addCase(getGallary.rejected,(state,action)=>{
            state.isSuccess = false;
            state.isError = true;
            state.message = action.payload;
            state.gallarys = null

        })
        .addCase(editGallary.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(editGallary.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.gallarys = action.payload;
        })
        .addCase(editGallary.rejected,(state,action)=>{
            state.isSuccess = false;
            state.isError = true;
            state.message = action.payload;
            state.gallarys = null

        })
    }
})
export const { reset } = gallerySlice.actions;
export default gallerySlice.reducer;
