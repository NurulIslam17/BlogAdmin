import { toast } from "react-toastify";
import appApi from "../utils/dataAxios";

export async function GetAllPost() {
  try {
    const response = await appApi.get("post");
    return response.data;
  } catch (error) {
    toast.error(error.response?.data?.message || error.message);
    return null;
  }
}

export async function CreatePost(data) {
  try {
    const response = await appApi.post("post/save", { data });
    console.log(response);
    toast.success(response?.data);
    return response;
  } catch (error) {
    const errorMessage = error.response?.data?.message || error.message;
    toast.error(errorMessage);
    return null;
  }
}

// export function CreatePost(data) {
//   try {
//     const file = data.file[0];
//     const post = {
//       title: data.title,
//       description: data.description,
//       author: data.author,
//       status: "PENDING",
//       category: {
//         id: parseInt(data.category_id),
//       },
//       user: {
//         id: 1,
//       },
//     };
//     const response = appApi.post("post", { file, post });
//     console.log(response);
//     toast.success("Post created successfully!");
//   } catch (error) {
//     const errorMessage = error.response?.data?.message || error.message;
//     toast.error(errorMessage);
//     return null;
//   }
// }
