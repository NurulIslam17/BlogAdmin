import { useEffect, useState } from "react";
import {
  deleteCategoryById,
  GetAllCategory,
} from "../../services/CategoryService";
import Add from "./Add.Jsx";
import { toast } from "react-toastify";
import Loader from "../common/Loader";
import Edit from "./Edit";

const List = () => {
  const [categories, setCategories] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [editData, setEditData] = useState({});

  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const fetchCategories = () => {
    setIsLoading(true);
    GetAllCategory()
      .then((response) => {
        setCategories(response);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
        toast.error(error.response?.data?.message || error.message);
      })
      .finally(() => setIsLoading(false));
  };

  const handleDelete = (id) => {
    deleteCategoryById(id).then(() => fetchCategories());
  };

  const handleEdit = (id) => {
    setIsEditModalOpen(true);
    setEditData(categories.find((category) => category.id === id));
  };

  if (!categories) return;
  // Pagination logic
  const totalPages = Math.ceil(categories.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = categories.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  return (
    <div className="p-4 pt-0 bg-white shadow rounded-lg">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold mb-4">Category List</h2>
        <button
          onClick={() => setIsAddModalOpen(!isAddModalOpen)}
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
        >
          Create
        </button>
      </div>

      <div className="h-[490px] overflow-y-auto relative">
        <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="py-1 px-4 border-b">ID</th>
              <th className="py-1 px-4 border-b text-center">Name</th>
              <th className="py-1 px-4 border-b text-center max-w-[50px]">
                Actions
              </th>
            </tr>
          </thead>

          <tbody>
            {isLoading ? (
              <tr>
                <td colSpan="4" className="text-center py-4">
                  <Loader />
                </td>
              </tr>
            ) : currentItems.length > 0 ? (
              currentItems.map((category, index) => (
                <tr
                  key={index}
                  className="hover:bg-gray-50 transition duration-200"
                >
                  <td className="py-1 px-4 border-b ">{index + 1}</td>
                  <td className="py-1 px-4 border-b text-center">
                    {category.name}
                  </td>
                  <td className="py-1 px-4 border-b text-center max-w-[50px]">
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
              ))
            ) : (
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

        <p className="text-gray-600 absolute bottom-0 left-2">
          Page {currentPage} of {totalPages}
        </p>
        <div className="flex space-x-2 absolute bottom-0 right-0">
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
      {isAddModalOpen && (
        <Add isOpen={isAddModalOpen} setIsOpen={setIsAddModalOpen} />
      )}
      {isEditModalOpen && (
        <Edit
          isOpen={isEditModalOpen}
          setIsOpen={setIsEditModalOpen}
          editData={editData}
        />
      )}
    </div>
  );
};
export default List;
