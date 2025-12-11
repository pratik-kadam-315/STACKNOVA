import axios from "axios";

// Create an Axios instance with your URL automatically loaded
const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL, 
});

export default api;