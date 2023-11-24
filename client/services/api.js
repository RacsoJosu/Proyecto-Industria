// services/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000',  // Ajusta la URL según sea necesario
  // Agrega más configuraciones según sea necesario
});

export default api;
