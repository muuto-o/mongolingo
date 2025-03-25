import axios, { isAxiosError } from 'axios';
import env from '@/env';

// Assuming you have environment variables configured (e.g., using Vite)
const API_URL = env.VITE_API_URL; // Or process.env.REACT_APP_API_URL for Create React App


const api = axios.create({
  baseURL: API_URL,
  timeout: 60000, // 1 minute
  headers: {
    'Content-Type': 'application/json',
    Accept: 'application/json',
  },
});

api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('accessToken');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

api.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (
      isAxiosError(error) &&
      error.response &&
      error.response.status === 401
    ) {
      const token = localStorage.getItem('accessToken');
      if (token) {
        localStorage.removeItem('accessToken');
        window.location.href = '/login'; 
      }
    }
    return Promise.reject(error);
  }
);

export default api;