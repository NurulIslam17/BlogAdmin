import { useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import "./App.css";
import { AuthContext } from "./contex/AuthContext";

import Add from "./pages/post/Add";
import Post from "./pages/post/Post";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";
import Layout from "./components/layout/Layout";
import Category from "./pages/category/Category";
import Dashboard from "./pages/dashboard/Dashboard";

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
        <Route path="post">
          <Route index element={<Post />} />
          <Route path="add" element={<Add />} />
        </Route>
      </Route>
      <Route path="*" element={<Navigate to="/login" />} />
    </Routes>
  );
}

export default App;
