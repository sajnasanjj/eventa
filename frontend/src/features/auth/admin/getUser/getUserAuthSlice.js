import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import getUserAuthService from './getUserAuthService'
import { errorHandler } from '../../../../utils/errorMessage'
const initialState = {
  users: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  isModified: false,
  message: '',
}
export const getUser = createAsyncThunk('alluser', async (thunkAPI) => {
  try {
    return await getUserAuthService.getUser()
  } catch (error) {
    return thunkAPI.rejectWithValue(errorHandler(error))
  }
})

export const changeUserStatus = createAsyncThunk(
  'changeUserStatus',
  async (userId, thunkAPI) => {
    try {
      return await getUserAuthService.changeUserStatus(userId)
    } catch (error) {
      return thunkAPI.rejectWithValue(errorHandler(error))
    }
  },
)

const getUserAuthSlice = createSlice({
  name: 'alluser',
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
      .addCase(getUser.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getUser.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
        state.users = action.payload
      })
      .addCase(getUser.rejected, (state, action) => {
        state.isLoading = false
        state.isSuccess = false
        state.isError = true
        state.message = action.payload
        state.users = null
      })

      .addCase(changeUserStatus.pending, (state) => {
        state.isLoading = true
        state.isModified = false
      })
      .addCase(changeUserStatus.fulfilled, (state) => {
        state.isLoading = false
        state.isModified = true
        state.isError = false
      })
      .addCase(changeUserStatus.rejected, (state, action) => {
        state.isLoading = false
        state.isModified = false
        state.isError = true
        state.message = action.payload
      })
  },
})

export const { reset } = getUserAuthSlice.actions
export default getUserAuthSlice.reducer
