import { useForm } from "react-hook-form";
import { FaRegListAlt } from "react-icons/fa";
import { FiImage } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";

const Add = () => {
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
    navigate("/post");
    reset();
  };

  return (
    <div className="border border-gray-300 rounded-2xl shadow-lg px-6 py-2">
      <div className="flex justify-between items-center py-2">
        <p className="text-2xl font-bold">Create Post</p>

        <Link
          to="/post"
          className="bg-gray-500 hover:bg-gray-600 text-white p-2 rounded"
        >
          <FaRegListAlt />
        </Link>
      </div>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-2">
          <div>
            <label className="block mb-1 text-gray-700">
              Title <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register("title", {
                required: "Title is required",
              })}
              className={`w-full border rounded-md p-2 ${
                errors.title ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter title name"
            />
            {errors.title && (
              <p className="text-red-500 text-sm mt-1">
                {errors.title.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-gray-700">
              Category <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register("category_id", {
                required: "Category is required",
              })}
              className={`w-full border rounded-md p-2 ${
                errors.category_id ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter category name"
            />
            {errors.category_id && (
              <p className="text-red-500 text-sm mt-1">
                {errors.category_id.message}
              </p>
            )}
          </div>

          <div>
            <label className="block mb-1 text-gray-700">
              Author <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register("author", {
                required: "Author is required",
              })}
              className={`w-full border rounded-md p-2 ${
                errors.author ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter author name"
            />
            {errors.author && (
              <p className="text-red-500 text-sm mt-1">
                {errors.author.message}
              </p>
            )}
          </div>

          <div>
            <label htmlFor="image" className="block mb-1 text-gray-700">
              Image <span className="text-red-500">*</span>
            </label>
            <div className="flex items-center border rounded-md p-2 gap-2">
              <FiImage className="text-gray-500 text-xl" />
              <input
                id="image"
                type="file"
                accept="image/*"
                {...register("file", {
                  required: "Image is required",
                })}
                className="w-full border-none outline-none"
              />
            </div>
            {errors.image && (
              <p className="text-red-500 text-sm mt-1">
                {errors.image.message}
              </p>
            )}
          </div>
        </div>

        {/* Description */}
        <div>
          <label className="block mb-1 text-gray-700">
            Description <span className="text-red-500">*</span>
          </label>
          <textarea
            {...register("description", {
              required: "Description is required",
            })}
            className={`w-full h-[250px] border rounded-md p-2 ${
              errors.content ? "border-red-500" : "border-gray-300"
            }`}
            placeholder="Enter description"
          ></textarea>
          {errors.description && (
            <p className="text-red-500 text-sm mt-1">
              {errors.description.message}
            </p>
          )}
        </div>

        <div className="flex justify-end space-x-2">
          <button
            type="submit"
            className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md"
          >
            Save
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;
