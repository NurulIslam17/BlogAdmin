import axios from "axios";

const appApi = axios.create({
  baseURL: "http://localhost:8080/api/",
});

// Add interceptor to include Authorization header if token exists
appApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }

    // Let axios set Content-Type for FormData automatically
    if (config.data instanceof FormData) {
      delete config.headers["Content-Type"];
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
export default appApi;
