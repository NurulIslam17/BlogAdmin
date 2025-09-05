import { Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import Dashboard from "./pages/dashboard/Dashboard";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import { useContext } from "react";
import { AuthContext } from "./contex/AuthContext";
import Category from "./pages/category/Category";
import Layout from "./components/layout/Layout";

function App() {
  const { token } = useContext(AuthContext);
  return (
    <Routes>
      <Route
        path="/login"
        element={!token ? <Login /> : <Navigate to="/dashboard" />}
      />
      <Route
        path="/register"
        element={!token ? <Register /> : <Navigate to="/dashboard" />}
      />

      {/* Protected Routes with Layout */}
      <Route path="/" element={token ? <Layout /> : <Navigate to="/login" />}>
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="category" element={<Category />} />
      </Route>
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
