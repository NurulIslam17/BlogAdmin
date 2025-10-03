import { toast } from "react-toastify";
import api from "../utils/axios";
import appApi from "../utils/dataAxios";
import Swal from "sweetalert2";

export async function GetAllCategory() {
  try {
    const response = await appApi.get("categories");
    return response.data;
  } catch (error) {
    toast.error(error.response?.data?.message || error.message);
    return null;
  }
}

export function CreateCategory(data) {
  try {
    const response = appApi.post("categories/save", data);
    toast.success("Category created successfully!");
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    toast.error(errorMessage);
    return null;
  }
}

export async function deleteCategoryById(id) {
  try {
    const result = await Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    });

    if (result.isConfirmed) {
      const response = await appApi.delete(`categories/${id}`);
      Swal.fire("Deleted!", "Category has been deleted.", "success");
    }
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    Swal.fire("Error!", errorMessage, "error");
    return null;
  }
}

export function UpdateCategoryById(id, data) {
  try {
    const response = appApi.put(`categories/${id}`, data);
    toast.success("Category updated successfully!");
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    toast.error(errorMessage);
    return null;
  }
}
