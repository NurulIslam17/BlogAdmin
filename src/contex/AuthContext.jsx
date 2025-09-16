import { jwtDecode } from "jwt-decode";
import { createContext, useState, useEffect, use } from "react";
import { useNavigate } from "react-router-dom";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState(
    () => JSON.parse(localStorage.getItem("user")) || null
  );
  const [token, setToken] = useState(
    () => localStorage.getItem("token") || null
  );

  // Function to check if token is expired
  const isTokenExpired = (token) => {
    if (!token) return true;
    try {
      const decoded = jwtDecode(token);
      const currentTime = Date.now() / 1000; // Current time in seconds
      return decoded.exp < currentTime; // Returns true if token is expired
    } catch (error) {
      console.error("Error decoding token:", error);
      return true; // Treat invalid tokens as expired
    }
  };
  const login = (userData, tokenData) => {
    if (isTokenExpired(tokenData)) {
      console.warn("Token is already expired");
      navigate("/login");
      return;
    }
    setUser(userData);
    setToken(tokenData);
    localStorage.setItem("user", JSON.stringify(userData));
    localStorage.setItem("token", tokenData);
    navigate("/dashboard");
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  useEffect(() => {
    if (!token || isTokenExpired(token)) {
      logout(); // Logout if no token or token is expired
    }
  }, [token]);

  return (
    <AuthContext.Provider value={{ user, token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
