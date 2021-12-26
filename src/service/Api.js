//* All the AXIOS API calls will be made from here to the backend
//* These functions will be exported and then imported wherever needed

import Axios from "axios";

const CRT_URL = "http://localhost:5000/create";
const READ_URL = "http://localhost:5000/getallposts";
const POST_URL = "http://localhost:5000/post";

//^ `````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
//* Axios call to create a post
//* IF sucess we alert Post made else we alert Post failed

export const createPost = async (post) => {
  try {
    const Post = await Axios.post(` ${CRT_URL}`, post);

    if (Post.data.sucess) {
      console.log(Post.data.sucess);
      alert("Blog has been added");
    } else {
      alert("Blog creation failed");
    }
  } catch (error) {
    console.log(error);
    alert("INTERNAL ERROR, PLEASE TRY AGAIN LATER");
  }
};

//^ `````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
//* Axios call to get all posts
//* Here we fetch all the posts from the DB and return it
//* This will called in Posts.jsx to map and display all the notes

export const getallPosts = async () => {
  try {
    const Allposts = await Axios.get(` ${READ_URL}`);
    return Allposts.data;
  } catch (error) {
    console.log(error);
    alert("INTERNAL ERROR, PLEASE TRY AGAIN LATER");
  }
};

//^ `````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````````
//* Axios call to get a single post
//* Here we fetch a single Post from the DB and then return it to the frontend
//* This will called in DetailView.jsx to display that particular notes' details

export const getSinglePost = async (id) => {
  try {
    const post = await Axios.get(` http://localhost:5000/post/${id}`);
    return post.data;
  } catch (error) {
    console.log(error);
    alert("INTERNAL ERROR, PLEASE TRY AGAIN LATER");
  }
};
