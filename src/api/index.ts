import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: `http://apilayer.net/api`,
});
