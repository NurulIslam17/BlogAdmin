import React from "react";
import { Link, NavLink } from "react-router-dom";

const Sidebar = () => {
  const linkClasses =
    "block px-6 py-2.5 rounded   hover:bg-gray-200 transition duration-200";
  return (
    <div>
      <aside className="w-64 bg-[#CAD3C8] h-screen">
        <div className="p-6 pb-0 text-2xl font-bold text-gray-800">Logo</div>
        <nav className="mt-6">
          <NavLink
            to="/dashboard"
            className={({ isActive }) =>
              `${linkClasses} ${isActive ? "bg-gray-200 " : ""}`
            }
          >
            Dashboard
          </NavLink>

          <NavLink
            to="/category"
            className={({ isActive }) =>
              `${linkClasses} ${isActive ? "bg-gray-200 " : ""}`
            }
          >
            Category
          </NavLink>

          <NavLink
            to="/post"
            className={({ isActive }) =>
              `${linkClasses} ${isActive ? "bg-gray-200 " : ""}`
            }
          >
            Post
          </NavLink>

          <NavLink
            to="/Settings"
            className={({ isActive }) =>
              `${linkClasses} ${isActive ? "bg-gray-200 " : ""}`
            }
          >
            Settings
          </NavLink>
        </nav>
      </aside>
    </div>
  );
};

export default Sidebar;
