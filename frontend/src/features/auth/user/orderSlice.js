import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import orderService from './orderService'
import { errorHandler } from '../../../utils/errorMessage'

const initialState = {

  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  form1:null,
  form2:null,
  form3:null,
  form4:null,
  form5:null,
  orders:[],
}
export const getOrder = createAsyncThunk(
  'orderthunk',
  async (thunkAPI) => {
    try {
      console.log('yupppp')
      return await orderService.getOrder()
    } catch (error) {
      return thunkAPI.rejectWithValue(errorHandler(error))
    }
  },
)
export const addOrder = createAsyncThunk(
  'addorderThunk',
  async (orderData, thunkAPI) => {
    try {
      console.log('addeddd')
      return await orderService.addOrder(orderData)
    }
     catch (error) {
      return thunkAPI.rejectWithValue(errorHandler(error))
    }
  },
)
export const orderSlice = createSlice({
  
  name: 'allorder',
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false
      state.isError = false
      state.isSuccess = false
      state.message = ''
    },
  
  form1:(state,action)=>{
    state.form1 = action.payload;
  },
  form2:(state,action)=>{
    state.form2 = action.payload;
  },
  form3:(state,action)=>{
    state.form3 = action.payload;
  },
  form4:(state,action)=>{
    state.form4 = action.payload;
  },
  form5:(state,action)=>{
    state.form5 = action.payload;
  }
  },
  extraReducers: (builder) => {
    builder
      .addCase(getOrder.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getOrder.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
        state.orders = action.payload
      })
      .addCase(getOrder.rejected, (state, action) => {
        state.isSuccess = false
        state.isError = true
        state.message = action.payload
        state.orders = null
      })
      .addCase(addOrder.pending,(state)=>{
            state.isLoading = true;
        })
        .addCase(addOrder.fulfilled,(state,action)=>{
            state.isSuccess = true;
            state.isLoading = true;
            state.orders = action.payload;

        })
        .addCase(addOrder.rejected,(state,action)=>{
            state.isError = true;
            state.isLoading=false;
            state.message = action.payload;
            state.orders = null;
        })
  },
})
export const { reset,form1,form2,form3,form4,form5 } = orderSlice.actions
export default orderSlice.reducer
