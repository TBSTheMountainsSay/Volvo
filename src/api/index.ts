import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: `https://api.apilayer.com`,
  headers: { apikey: process.env.REACT_APP_TOKEN },
});
