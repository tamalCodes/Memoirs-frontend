import React, { useEffect } from 'react'
import "../../styles/DetailView.css"
import EditTwoToneIcon from '@mui/icons-material/EditTwoTone';
import DeleteTwoToneIcon from '@mui/icons-material/DeleteTwoTone';
import { Link, useNavigate } from 'react-router-dom';
import { useState } from 'react';
import { deletePost, getSinglePost } from '../../service/Api';
import { useLocation } from "react-router-dom";

const DetailView = () => {

    const navigate = useNavigate();

    //* Usestate to store the data
    const [post, setpost] = useState({})

    //* uselocation hooks to get the blog's ID
    const location = useLocation();
    const from = location.state;

    //* async function to call the getSinglepost function which in turn calls the API
    const displayPost = async (req, res) => {
        const blog_id = from.from;
        let data = await getSinglePost(blog_id);
        setpost(data)
        console.log(data);
    }

    //* Useeffect to display the values once
    useEffect(() => {
        displayPost();
    }, []);

    //* handleDelete function to delete a post
    const handleDelete = async (e) => {
        e.preventDefault();
        const blog_id = from.from;
        await deletePost(blog_id);
        navigate("/");
    }

    return (
        <>
            <div className="container">
                <img className='det_img' src="https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="banner" />

                <div className="container-fluid icons_parent">
                    <DeleteTwoToneIcon className='icons' style={{ color: "red", border: "1px solid red" }} onClick={handleDelete} />
                    <Link to={`/update/${post._id}`} state={{ from: `${post._id}` }}><EditTwoToneIcon className='icons' style={{ color: "blue", border: "1px solid blue" }} /></Link>
                </div>

                <h1 className='det_title'> {post.title} </h1>

                <div className="container-fluid tags_parent">
                    <h6 className="card-subtitle mb-2 text-muted det_tag">Blog by <Link to={`/?username=${post.username}`}>{post.username}</Link> </h6>
                    <h6 className="card-subtitle mb-2 text-muted det_date">{new Date(post.date).toDateString()} </h6>

                </div>

                <div className="container-fluid info_parent" >
                    <p className="det_desc">{post.description}</p>
                </div>
            </div>
        </>
    )
}

export default DetailView
