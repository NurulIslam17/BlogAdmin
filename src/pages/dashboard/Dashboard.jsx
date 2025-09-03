import React, { useContext } from "react";
import { CiLogout } from "react-icons/ci";
import { AuthContext } from "../../contex/AuthContext";

const Dashboard = () => {
  const { user, logout } = useContext(AuthContext);
  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-[#CAD3C8]">
        <div className="p-6 pb-0 text-2xl font-bold text-gray-800">
          Logo
        </div>
        <nav className="mt-6">
          <a
            href="#"
            className="block px-6 py-2.5 rounded bg-gray-200  hover:bg-gray-200 transition duration-200"
          >
            Dashboard
          </a>
          <a
            href="#"
            className="block py-2.5 px-6 rounded hover:bg-gray-200 transition duration-200"
          >
            Users
          </a>
          <a
            href="#"
            className="block py-2.5 px-6 rounded hover:bg-gray-200 transition duration-200"
          >
            Category
          </a>
          <a
            href="#"
            className="block py-2.5 px-6 rounded hover:bg-gray-200 transition duration-200"
          >
            Post
          </a>
          <a
            href="#"
            className="block py-2.5 px-6 rounded hover:bg-gray-200 transition duration-200"
          >
            Settings
          </a>
        </nav>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Header */}
        <header className="bg-[#CAD3C8] py-4 px-6 flex justify-between items-center">
          <h1 className="text-xl font-semibold text-gray-800">Welcome, {user?.name}</h1>
          <div className="flex items-center gap-4">
            <img
              src="https://placehold.co/20x20"
              className="w-[20px] h-[20px] border-2 border-gray-500 rounded-full"
              alt=""
              srcSet=""
            />

            <button onClick={logout} className="font-bold cursor-pointer">
              <CiLogout />
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 p-6">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Card */}
            <div className="bg-white p-6 rounded shadow rounded-lg hover:shadow-lg transition duration-200">
              <h2 className="text-lg font-semibold mb-2">Users</h2>
              <p className="text-gray-600 text-sm">Total Users: 120</p>
            </div>

            <div className="bg-white p-6 rounded shadow rounded-lg hover:shadow-lg transition duration-200">
              <h2 className="text-lg font-semibold mb-2">Category</h2>
              <p className="text-gray-600 text-sm">Total Categories: 320</p>
            </div>

            <div className="bg-white p-6 rounded shadow rounded-lg hover:shadow-lg transition duration-200">
              <h2 className="text-lg font-semibold mb-2">Post</h2>
              <p className="text-gray-600 text-sm">Number of posts: 100</p>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Dashboard;
