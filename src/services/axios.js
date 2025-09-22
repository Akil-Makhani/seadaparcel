import axios from 'axios';
import { clearLocalStorage, getItemLocalStorage } from "../utils/browserSetting";

const BASE_URL = process.env.REACT_APP_REST_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: BASE_URL,
});

axiosInstance.interceptors.request.use(async (config) => {
  const token = getItemLocalStorage('token');
  if (token) {
    config.headers = {
      Authorization: `Bearer ${token}`,
      'Access-Control-Allow-Origin': '*',
      // "Access-Control-Allow-Headers": 'application/json',
      "Content-Type": "application/json"
    };
  }
  return config;
});

axiosInstance.interceptors.response.use(
  undefined,
  (error) => {
    if (error.message === 'Network Error' && !error.response) {
      console.log('Network error - make sure API is running!');
    }
    if (error.response) {
      const { status } = error.response;
      if (status === 404) {
        console.log('Not Found');
      }
      if (status === 401) {
        if (typeof window !== 'undefined' && window.location) {
          window.location.href = '/login';
          clearLocalStorage();
          console.log('Your session has expired, please login again');
        }
      }
      return error.response;
    }

    console.log(error);
    return error;
  }
);

export default axiosInstance;
