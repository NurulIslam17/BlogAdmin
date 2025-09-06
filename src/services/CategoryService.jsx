import { toast } from "react-toastify";
import api from "../utils/axios";
import appApi from "../utils/dataAxios";

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
    console.log(response);
    toast.success("Category created successfully!");
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    toast.error(errorMessage);
    return null;
  }
}
