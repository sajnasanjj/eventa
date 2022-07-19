import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import albumService from './albumService'
import { errorHandler } from '../../../../utils/errorMessage'

const initialState = {
  albums: [],
  isError: false,
  isSuccess: false,
  isLoading: false,
  isModified: false,
  isDeleted: false,
  message: '',
}
export const getAlbum = createAsyncThunk(
  'albumthunk',
  async (data, thunkAPI) => {
    try {
      return await albumService.getAlbum()
    } catch (error) {
      return thunkAPI.rejectWithValue(errorHandler(error))
    }
  },
)
export const addAlbum = createAsyncThunk(
  'addalbumThunk/addAlbum',
  async (albumData, thunkAPI) => {
    try {
      return await albumService.addAlbum(albumData)
    } catch (error) {
      return thunkAPI.rejectWithValue(errorHandler(error))
    }
  },
)
export const editAlbum = createAsyncThunk('editalbum', async (id, thunkAPI) => {
  try {
    return await albumService.editAlbum(id)
  } catch (error) {
    return thunkAPI.rejectWithValue(errorHandler(error))
  }
})
export const deleteAlbum = createAsyncThunk(
  'deleteAlbum',
  async (albumId, thunkAPI) => {
    try {
      console.log('delte', albumId)
      return await albumService.deleteAlbum(albumId)
    } catch (error) {
      return thunkAPI.rejectWithValue(errorHandler(error))
    }
  },
)
const albumSlice = createSlice({
  name: 'allalbum',
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
      .addCase(getAlbum.pending, (state) => {
        state.isLoading = true
      })
      .addCase(getAlbum.fulfilled, (state, action) => {
        state.isLoading = false
        state.isSuccess = true
        state.isError = false
        state.albums = action.payload
      })
      .addCase(getAlbum.rejected, (state, action) => {
        state.isSuccess = false
        state.isError = true
        state.message = action.payload
        state.albums = null
      })

      .addCase(editAlbum.pending, (state) => {
        state.isLoading = true
        state.isModified = false
      })
      .addCase(editAlbum.fulfilled, (state) => {
        state.isLoading = false
        state.isError = false
        state.isModified = true
      })
      .addCase(editAlbum.rejected, (state, action) => {
        state.isModified = false
        state.isError = true
        state.message = action.payload
        state.isModified = false
      })

      .addCase(addAlbum.pending, (state) => {
        state.isLoading = true
      })
      .addCase(addAlbum.fulfilled, (state) => {
        state.isSuccess = true
        state.isLoading = true
      })
      .addCase(addAlbum.rejected, (state, action) => {
        state.isError = true
        state.isLoading = false
        state.isSuccess = false
        state.message = action.payload
      })

      .addCase(deleteAlbum.pending, (state) => {
        state.isLoading = true
        state.isDeleted = false
      })
      .addCase(deleteAlbum.fulfilled, (state) => {
        state.isDeleted = true
        state.isLoading = false
        state.isError = true
      })
      .addCase(deleteAlbum.rejected, (state, action) => {
        state.isError = true
        state.isLoading = false
        state.isDeleted = false
        state.message = action.payload
      })
  },
})
export const { reset } = albumSlice.actions
export default albumSlice.reducer
