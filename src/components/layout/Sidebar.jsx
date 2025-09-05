import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <div>
      <aside className="w-64 bg-[#CAD3C8] h-screen">
        <div className="p-6 pb-0 text-2xl font-bold text-gray-800">Logo</div>
        <nav className="mt-6">
          <Link
            to="/dashbard"
            className="block px-6 py-2.5 rounded bg-gray-200  hover:bg-gray-200 transition duration-200"
          >
            Dashboard
          </Link>

          <Link
            to="/category"
            className="block px-6 py-2.5 rounded   hover:bg-gray-200 transition duration-200"
          >
            Category
          </Link>

          <Link
            to="/Settings"
            className="block px-6 py-2.5 rounded   hover:bg-gray-200 transition duration-200"
          >
            Settings
          </Link>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
