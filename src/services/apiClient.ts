// src/services/apiClient.ts
import axios from 'axios';

const apiClient = axios.create({
  // process.env para leer las variables
  baseURL: process.env.NEXT_PUBLIC_API_URL, 
  headers: {
    'Content-Type': 'application/json',
  },
});

export default apiClient;