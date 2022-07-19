import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import orderService from './orderService'
import { errorHandler } from '../../../utils/errorMessage'

const initialState = {
  isError: false,
  isSuccess: false,
  isLoading: false,
  message: '',
  orders: [],
}
export const getOrder = createAsyncThunk(
  'orderthunk',
  async (orderData, thunkAPI) => {
    try {
      console.log('yupppp')
      return await orderService.getOrder()
    } catch (error) {
      return thunkAPI.rejectWithValue(errorHandler(error))
    }
  },
)
export const addOrder = createAsyncThunk(
  'addorderThunk/addAlbum',
  async (orderData, thunkAPI) => {
    try {
      console.log('addeddd')
      return await orderService.addOrder(orderData)
    } catch (error) {
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
  },
})
export const { reset } = orderSlice.actions
export default orderSlice.reducer
