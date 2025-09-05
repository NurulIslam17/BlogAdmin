import React, { useState } from "react";

const List = () => {
  const [categories, setCategories] = useState([
    { id: 1, name: "Electronics", description: "Gadgets and devices" },
    { id: 2, name: "Clothing", description: "Apparel and fashion" },
    { id: 3, name: "Books", description: "Fiction and non-fiction" },
    { id: 4, name: "Furniture", description: "Home and office furniture" },
    { id: 5, name: "Toys", description: "Kids toys and games" },
    { id: 6, name: "Groceries", description: "Daily essentials" },
    { id: 7, name: "Shoes", description: "Footwear for all" },
    { id: 8, name: "Sports", description: "Sports gear and accessories" },
    { id: 4, name: "Furniture", description: "Home and office furniture" },
    { id: 5, name: "Toys", description: "Kids toys and games" },
    { id: 6, name: "Groceries", description: "Daily essentials" },
    { id: 7, name: "Shoes", description: "Footwear for all" },
    { id: 8, name: "Sports", description: "Sports gear and accessories" },
    { id: 4, name: "Furniture", description: "Home and office furniture" },
    { id: 5, name: "Toys", description: "Kids toys and games" },
    { id: 6, name: "Groceries", description: "Daily essentials" },
    { id: 7, name: "Shoes", description: "Footwear for all" },
    { id: 8, name: "Sports", description: "Sports gear and accessories" },
    { id: 4, name: "Furniture", description: "Home and office furniture" },
    { id: 5, name: "Toys", description: "Kids toys and games" },
    { id: 6, name: "Groceries", description: "Daily essentials" },
    { id: 7, name: "Shoes", description: "Footwear for all" },
    { id: 8, name: "Sports", description: "Sports gear and accessories" },
  ]);

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5;

  const handleEdit = (id) => {
    alert(`Edit category with ID: ${id}`);
  };

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this category?")) {
      setCategories(categories.filter((cat) => cat.id !== id));
    }
  };

  // Pagination logic
  const totalPages = Math.ceil(categories.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = categories.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  return (
    <div className="p-6 bg-white shadow rounded-lg">
      <h2 className="text-2xl font-semibold mb-4">Category List</h2>

      <div className="h-[400px] overflow-y-auto bg-red-200 relative">
        <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="py-3 px-4 border-b">ID</th>
              <th className="py-3 px-4 border-b">Name</th>
              <th className="py-3 px-4 border-b">Description</th>
              <th className="py-3 px-4 border-b text-center">Actions</th>
            </tr>
          </thead>
          <tbody>
            {currentItems.map((category) => (
              <tr
                key={category.id}
                className="hover:bg-gray-50 transition duration-200"
              >
                <td className="py-3 px-4 border-b">{category.id}</td>
                <td className="py-3 px-4 border-b">{category.name}</td>
                <td className="py-3 px-4 border-b">{category.description}</td>
                <td className="py-3 px-4 border-b text-center">
                  <button
                    onClick={() => handleEdit(category.id)}
                    className="bg-blue-500 text-white px-3 py-1 rounded mr-2 hover:bg-blue-600 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(category.id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}

            {currentItems.length === 0 && (
              <tr>
                <td
                  colSpan="4"
                  className="text-center py-4 text-gray-500 italic"
                >
                  No categories found.
                </td>
              </tr>
            )}
          </tbody>
        </table>

        <div className="flex justify-between items-center mt-4 absolute bottom-0">
          <p className="text-gray-600">
            Page {currentPage} of {totalPages}
          </p>
          <div className="flex space-x-2">
            <button
              onClick={() => goToPage(currentPage - 1)}
              disabled={currentPage === 1}
              className={`px-3 py-1 rounded border ${
                currentPage === 1
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              Prev
            </button>
            {[...Array(totalPages)].map((_, index) => (
              <button
                key={index}
                onClick={() => goToPage(index + 1)}
                className={`px-3 py-1 rounded border ${
                  currentPage === index + 1
                    ? "bg-blue-500 text-white"
                    : "bg-gray-100 hover:bg-gray-200"
                }`}
              >
                {index + 1}
              </button>
            ))}
            <button
              onClick={() => goToPage(currentPage + 1)}
              disabled={currentPage === totalPages}
              className={`px-3 py-1 rounded border ${
                currentPage === totalPages
                  ? "bg-gray-200 text-gray-400 cursor-not-allowed"
                  : "bg-gray-100 hover:bg-gray-200"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default List;
