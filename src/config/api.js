import axios from 'axios';
import LoginServico from '../servicos/LoginServico';

const API = axios.create({
  baseURL: "http://localhost:3001",
  headers: {
    'Content-Type': 'application/json'
  }
});

API.interceptors.request.use(config => {
  // const token = LoginServico.getToken();
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzIyMjQ0NjEyLCJleHAiOjE3MjIzMzEwMTJ9.5pEZEBy4dQXIj-lmuW5HZd4qv9XL9sDnajTJIpRgmpM";
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});


export default API;
