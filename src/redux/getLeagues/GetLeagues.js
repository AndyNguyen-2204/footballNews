import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { get,postFormData } from '../../axios/baseApi'; 
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// Khai báo kiểu dữ liệu cho state
const initialState = {
  dataLeague: null,
  loading: false,
  err: null,
  dataLeagueStandings:null
};

// Tạo action creator bất đồng bộ để thực hiện cuộc gọi API và cập nhật state trong slice
export const GetDataLeagues = createAsyncThunk(
  'GetLeagues/getLeague',
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
export const GetDataLeagueStandings = createAsyncThunk(
  'GetDataLeagueStandings/getLeague',
  async ({ url, formData }) => {
    try {
      const response = await postFormData(url, formData); // Thay đổi URL tùy theo API của bạn
      return response.data;
    } catch (error) {
      throw new Error(error.response.data);
      return error.response

    }
  }
);

export const LeaguesSlice = createSlice({
  name: 'ListClub',
  initialState,
  reducers: {
    // reducers khác ở đây
  },
  extraReducers: (builder) => {
    builder
      .addCase(GetDataLeagues.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null
      })
      .addCase(GetDataLeagues.fulfilled, (state, action) => {
        state.loading = false;
        state.dataLeague = action.payload
      })
      .addCase(GetDataLeagues.rejected, (state, action) => {
        state.loading = false;
        // state.error = action.error.message;
        toast.error(action.error.message);
        state.success = null
      })
      .addCase(GetDataLeagueStandings.pending, (state) => {
        state.loading = true;
        state.error = null;
        state.success = null
      })
      .addCase(GetDataLeagueStandings.fulfilled, (state, action) => {
        state.loading = false;
        state.dataLeagueStandings = action.payload
      })
      .addCase(GetDataLeagueStandings.rejected, (state, action) => {
        state.loading = false;
        // state.error = action.error.message;
        toast.error(action.error.message);
        state.success = null
      })
  },
});

// Action creators không cần thay đổi, vẫn giữ nguyên như trước
export default LeaguesSlice.reducer;