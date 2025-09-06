import { useState } from "react";
import Modal from "../common/Modal";
import { CreateCategory } from "../../services/CategoryService";
import { useForm } from "react-hook-form";

const Add = ({ isOpen, setIsOpen }) => {
  // Initialize React Hook Form
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = (data) => {
    CreateCategory(data);
    setIsOpen(false);
    reset();
  };

  return (
    <div>
      <Modal title="Add Category" isOpen={isOpen} setIsOpen={setIsOpen}>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block mb-1 text-gray-700">
              Name <span className="text-red-500">*</span>
            </label>
            <input
              type="text"
              {...register("name", {
                required: "Category is required",
              })}
              className={`w-full border rounded-md p-2 ${
                errors.name ? "border-red-500" : "border-gray-300"
              }`}
              placeholder="Enter category name"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
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
      </Modal>
    </div>
  );
};

export default Add;
