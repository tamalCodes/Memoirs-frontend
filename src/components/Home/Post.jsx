//* This is a single Post in form of a CARD
//* We are passing {post} from Posts.jsx which we has the Data from DB which we got from API call
//* Then we are mapping the data and passing the values here so that they can be displayed

import React from 'react'
import "../../styles/Post.css"

const Post = ({ post }) => {

    const pic_url = post.picture || "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80"
    return (
        <>


            <div className="card" style={{ width: "18rem", margin: "10px 5px", }}>
                <img class="card-img-top" src={pic_url} alt="ran" />

                <div className="card-body" >
                    <h5 className="card-title">{post.title} </h5>
                    <h6 className="card-subtitle mb-2 text-muted" style={{ textAlign: "center" }}># {post.categories} </h6>
                    <div className="card-text text-truncate">{post.description}</div>
                    {/* <p className="card-text text-truncate "> { </p> */}

                    <h6 className="card-subtitle mb-2 text-muted" style={{ textAlign: "center", marginTop: "20px", fontSize: "0.8rem" }}>Author: {post.username} </h6>
                    <sub></sub>
                </div>
            </div>


        </>

    )
}

export default Post
