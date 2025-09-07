import { toast } from "react-toastify";
import appApi from "../utils/dataAxios";

export async function  GetAllPost() 
{
    try {
        const response = await appApi.get("post");
        return response.data;
      } catch (error) {
        toast.error(error.response?.data?.message || error.message);
        return null;
      }
}