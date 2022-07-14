import {createSlice,createAsyncThunk} from '@reduxjs/toolkit';
import serviceService from './serviceService';


const initialState ={
    services:[],
    isError:false,
    isSuccess:false,
    isLoading:false,
    isModified:false,
    isDeleted:false,
    message:''

}
export const getService = createAsyncThunk('servicethunk',async(data,thunkAPI)=>{
    try{
        console.log("yupppp")
            return await serviceService.getService();

    }catch(error){
            const message =(error.response && error.response.data && error.response.data.message) || error.message || error.toString() || 'Something wrong';
            return thunkAPI.rejectWithValue(message)

    }
});
export const addService = createAsyncThunk('addserviceThunk/addService',async(serviceData,thunkAPI)=>{
    try{
        console.log("addeddd")
        return await serviceService.addService(serviceData);
    }catch(error){
            const message =(error.response && error.response.data && error.response.data.message) || error.message || error.toString() || 'Something wrong';
            return thunkAPI.rejectWithValue(message)
    }
})
export const editService = createAsyncThunk('editservice',async(id,thunkAPI)=>{
    try{
        console.log("Its going to update")
        return await serviceService.editService(id);
    }catch(error){
            const message =(error.response && error.response.data && error.response.data.message) || error.message || error.toString() || 'Something wrong';
            return thunkAPI.rejectWithValue(message)
    }
})
export const deleteService = createAsyncThunk('deleteService',async(serviceId,thunkAPI)=>{
    try{
        console.log("delte",serviceId)

        return await serviceService.deleteService(serviceId);

    }catch(error){
            const message =(error.response && error.response.data && error.response.data.message) || error.message || error.toString() || 'Something wrong';
            return thunkAPI.rejectWithValue(message)

    }
})
const serviceSlice = createSlice({
    name:'allservice',
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
        .addCase(getService.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(getService.fulfilled,(state,action)=>{
            state.isLoading = false;
            state.isSuccess = true;
            state.isError = false;
            state.services = action.payload;
        })
        .addCase(getService.rejected,(state,action)=>{
            state.isSuccess = false;
            state.isError = true;
            state.message = action.payload;
            state.services = null

        })

        .addCase(editService.pending,(state)=>{
            state.isLoading = true;
            state.isModified =false;
        })
        .addCase(editService.fulfilled,(state)=>{
            state.isLoading = false;
            state.isError = false;
            state.isModified = true;
        })
        .addCase(editService.rejected,(state,action)=>{
            state.isModified = false;
            state.isError = true;
            state.message = action.payload;
            state.isModified = false
        })


        .addCase(addService.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(addService.fulfilled,(state)=>{
            state.isSuccess = true;
            state.isLoading = true;

        })
        .addCase(addService.rejected,(state,action)=>{
            state.isError = true;
            state.isLoading=false;
            state.isSuccess=false;
            state.message = action.payload;
        })

        .addCase(deleteService.pending,(state)=>{
            state.isLoading = true;
            state.isDeleted = false;
        })
        .addCase(deleteService.fulfilled,(state)=>{
            state.isDeleted = true;
            state.isLoading = false;
            state.isError = true;

        })
        .addCase(deleteService.rejected,(state,action)=>{
            state.isError = true;
            state.isLoading=false;
            state.isDeleted=false;
            state.message = action.payload;
        })
    }
})
export const { reset } = serviceSlice.actions;
export default serviceSlice.reducer;
