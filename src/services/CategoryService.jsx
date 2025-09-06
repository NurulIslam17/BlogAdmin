import { toast } from "react-toastify";
import api from "../utils/axios";
import appApi from "../utils/dataAxios";

export default async function GetAllCategory() {
  try {
    const response = await appApi.get("categories");
    return response.data;
  } catch (error) {
    toast.error(error.response?.data?.message || error.message);
    alert(` ${error.response?.data?.message || error.message}`);
    return null;
  }
}
