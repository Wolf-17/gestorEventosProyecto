import axios from "axios";

const apiClient = axios.create({
  baseURL: import.meta.env.REACT_APP_API_URL || "http://localhost:3001/api",
  headers: {
    "Content-Type": "application/json",
  },
});

// Interceptor para agregar el token en las solicitudes
apiClient.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default apiClient;