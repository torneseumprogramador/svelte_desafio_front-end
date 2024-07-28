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
  const token = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MywiaWF0IjoxNzIyMTU4MDM1LCJleHAiOjE3MjIyNDQ0MzV9.guu0m9w4g3NudYsFO0zAfU0mA7Vmfh31LmmbFFQgth8";
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
}, error => {
  return Promise.reject(error);
});


export default API;
