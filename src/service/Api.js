//* All the API calls will be made from here to the backend using Axios

import Axios from "axios";

const CRT_URL = "http://localhost:5000/create";

//^ `````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
//* Axios call to create a post

export const createPost = async (post) => {
  try {
    const Post = await Axios.post(` ${CRT_URL}`, post);

    if (Post.data.sucess) {
      console.log(Post.data.sucess);
      alert("POST MADE");
    } else {
      alert("post failed");
    }
  } catch (error) {
    console.log(error);
  }
};
