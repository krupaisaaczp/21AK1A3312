// src/axiosConfig.js
import axios from 'axios';

// Create an Axios instance with a base URL
const instance = axios.create({
  baseURL: 'http://your-api-base-url' // Replace with your API base URL
});

export default instance;
