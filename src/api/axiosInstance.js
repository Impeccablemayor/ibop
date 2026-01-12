// src/api/axiosInstance.js
import axios from "axios";

// Create axios instance
const api = axios.create({
  baseURL: "https://your-backend.com/api", // replace with your backend URL
});

// Add a request interceptor to include JWT automatically
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // JWT stored after login
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

export default api;
