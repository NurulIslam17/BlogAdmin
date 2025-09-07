import React, { useContext } from "react";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex h-[calc(100vh-0px)] bg-gray-600">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Navbar />
        <main className="flex-1 p-6 pt-2 bg-white">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default Layout;
