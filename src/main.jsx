
import { createRoot } from "react-dom/client";
import 'react-toastify/dist/ReactToastify.css';
import { ToastContainer } from 'react-toastify';
import { BrowserRouter } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import { AuthProvider } from "./contex/AuthContext.jsx";

createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <AuthProvider>
      <App />
       <ToastContainer position="top-right" autoClose={3000} />
    </AuthProvider>
  </BrowserRouter>
);
