import axios from "axios";

const appApi = axios.create({
  baseURL: "http://localhost:8080/api/",
});

appApi.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token");
    if (token) {
      try {
        const payload = JSON.parse(atob(token.split(".")[1]));
        const isExpired = payload.exp && Date.now() >= payload.exp * 1000;

        if (isExpired) {
          console.error("Token expired");
          localStorage.removeItem("token");
          return Promise.reject(new Error("Token expired"));
        }

        config.headers.Authorization = `Bearer ${token}`;
      } catch (error) {
        console.error("Invalid token format:", error);
        localStorage.removeItem("token");
        return Promise.reject(new Error("Invalid token"));
      }
    }

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
