import { useState } from "react";
import { GetAllPost } from "../../services/PostService";
import Loader from "../common/Loader";
import { MdEditNotifications } from "react-icons/md";
import { FaRegEdit } from "react-icons/fa";
import { FaRegTrashCan } from "react-icons/fa6";
import { Link } from "react-router-dom";

const List = () => {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const REACT_APP_BASE_URL = "http://localhost:8080";
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 10;

  const totalPages = Math.ceil(posts.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const currentItems = posts.slice(startIndex, startIndex + itemsPerPage);

  const goToPage = (page) => {
    if (page >= 1 && page <= totalPages) {
      setCurrentPage(page);
    }
  };

  const fetchPost = () => {
    setIsLoading(true);
    GetAllPost()
      .then((response) => {
        setPosts(response);
        setIsLoading(false);
      })
      .catch((error) => {
        console.log("Error");
        console.log(error);
      });
  };

  useState(() => {
    fetchPost();
  }, []);
  return (
    <div className="p-4 pt-0 bg-white relative shadow rounded-lg">
      <div className="flex items-center justify-between">
        <h2 className="text-2xl font-semibold mb-4">Post List</h2>
        <Link
          to={"/post/add"}
          className="bg-green-500 text-white px-3 py-1 rounded hover:bg-green-600 transition"
        >
          Create
        </Link>
      </div>

      <div className="h-[490px] relative overflow-y-auto">
        <table className="min-w-full border border-gray-300 rounded-lg overflow-hidden relative">
          <thead>
            <tr className="bg-gray-100 text-left">
              <th className="py-1 px-4 text-center border-b">SL</th>
              <th className="py-1 px-4 text-center border-b">Image</th>
              <th className="py-1 px-4 border-b text-left">Title</th>
              <th className="py-1 px-4 border-b text-left">Author</th>
              <th className="py-1 px-4 border-b text-left">Category</th>
              <th className="py-1 px-4 border-b text-left">Description</th>
              <th className="py-1 px-4 border-b text-center">Status</th>
              <th className="py-1 px-4 border-b text-center max-w-[50px]">
                Actions
              </th>
            </tr>
          </thead>

          {posts?.length > 0 && (
            <tbody>
              {isLoading ? (
                <tr>
                  <td colSpan="4" className="text-center py-4">
                    <Loader />
                  </td>
                </tr>
              ) : currentItems.length > 0 ? (
                currentItems.map((post, index) => (
                  <tr
                    key={index}
                    className="hover:bg-gray-50 transition duration-200"
                  >
                    <td className="py-1 px-1 text-center border-b ">
                      {index + 1}
                    </td>
                    <td className="py-1 px-1 border-b">
                      <div className="flex justify-center">
                        <img src="https://placehold.co/40x40" className="rounded-full" alt="" srcSet="" />
                      </div>
                    </td>
                    <td className="py-1 px-1 border-b ">{post?.title}</td>
                    <td className="py-1 px-1 border-b ">{post?.author}</td>
                    <td className="py-1 px-1 border-b ">
                      {post?.categoryName}
                    </td>
                    <td className="py-1 px-1 border-b ">
                      {post?.description.slice(0, 50)}...
                    </td>
                    <td className="py-1 px-1 border-b text-center">
                      <span
                        className={`px-2 py-1 rounded font-medium ${
                          post?.status === "PENDING"
                            ? "bg-yellow-500 text-white"
                            : ""
                        } ${
                          post?.status === "PUBLISHED"
                            ? "bg-green-500 text-white"
                            : ""
                        } ${
                          post?.status === "UNPUBLISHED"
                            ? "bg-red-500 text-white"
                            : ""
                        }`}
                      >
                        {post?.status}
                      </span>
                    </td>
                    <td className="py-1 px-1 border-b text-center">
                      <button
                        onClick={() => handleEdit(post.id)}
                        className="bg-blue-500 text-white px-2 py-1 rounded mr-2 hover:bg-blue-600 transition"
                      >
                        <FaRegEdit />
                      </button>
                      <button
                        onClick={() => handleDelete(category.id)}
                        className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600 transition"
                      >
                        <FaRegTrashCan />
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
          )}
        </table>

        {posts?.length === 0 && !isLoading && (
          <div className="">
            <p className="text-center py-4 text-gray-500 italic">
              No categories found.
            </p>
          </div>
        )}

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
    </div>
  );
};

export default List;
