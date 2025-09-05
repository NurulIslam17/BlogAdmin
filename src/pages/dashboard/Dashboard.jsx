import React from "react";

const Dashboard = () => {
  return (
    <>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {/* Card */}
        <div className="bg-white p-6 shadow rounded-lg hover:shadow-lg transition duration-200">
          <h2 className="text-lg font-semibold mb-2">Users</h2>
          <p className="text-gray-600 text-sm">Total Users: 120</p>
        </div>

        <div className="bg-white p-6 shadow rounded-lg hover:shadow-lg transition duration-200">
          <h2 className="text-lg font-semibold mb-2">Category</h2>
          <p className="text-gray-600 text-sm">Total Categories: 320</p>
        </div>

        <div className="bg-white p-6  shadow rounded-lg hover:shadow-lg transition duration-200">
          <h2 className="text-lg font-semibold mb-2">Post</h2>
          <p className="text-gray-600 text-sm">Number of posts: 100</p>
        </div>
      </div>
    </>
  );
};

export default Dashboard;
