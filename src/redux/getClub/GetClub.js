import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { get } from '../../axios/baseApi'; // Import hàm post từ module api.js
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Khai báo kiểu dữ liệu cho state
const initialState = {
  dataClub: null,
  loading: false,
  err: null
};

// Tạo action creator bất đồng bộ để thực hiện cuộc gọi API và cập nhật state trong slice
export const GetClub = createAsyncThunk(
  'GetClub/getClub',
  async ({ url, data }) => {
    try {
      const response = await get(url, data); // Thay đổi URL tùy theo API của bạn
      return response.data;
    } catch (error) {
      throw new Error(error.response.data);
      return error.response

    }
  }
);

export const ClubSlice = createSlice({
  name: 'Club',
  initialState,
  reducers: {
    // reducers khác ở đây
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetClub.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null
      })
      .addCase(GetClub.fulfilled, (state, action) => {
        state.loading = false;
        state.dataClub = action.payload
      })
      .addCase(GetClub.rejected, (state, action) => {
        state.loading = false;
        // state.error = action.error.message;
        toast.error(action.error.message);
        state.success = null
      })
  },
});

// Action creators không cần thay đổi, vẫn giữ nguyên như trước
export default ClubSlice.reducer;