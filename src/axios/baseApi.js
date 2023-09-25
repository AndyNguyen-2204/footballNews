import axios from 'axios';

const BASE_URL = 'https://v3.football.api-sports.io';
const axiosInstance = axios.create({
  baseURL: BASE_URL,
  timeout: 5000,
  headers: {
    'x-rapidapi-host': 'v3.football.api-sports.io', 
    'x-rapidapi-key': '6d2c64573180016255cc3faa74830055',
  },
});

// Hàm GET để lấy dữ liệu từ API
export const get = (url, params = {}) => {
  // Sử dụng các header có sẵn trong axiosInstance
  return axiosInstance.get(url, { params });
};