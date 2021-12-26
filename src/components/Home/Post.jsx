//* This is a single Post , for now it is hardcoded later on we will be using API to fetch the notes' data

import React from 'react'
import "../../styles/Post.css"

const Post = () => {
    return (
        <>


            <div className="card" style={{ width: "18rem", margin: "10px 5px", textAlign: "center" }}>
                <img class="card-img-top" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=752&q=80" alt="ran" />

                <div class="card-body">
                    <div className="card-body">
                        <h5 className="card-title">Title</h5>
                        <h6 className="card-subtitle mb-2 text-muted"># music</h6>
                        <p className="card-text">Hello i am tamal and this is my blog's description for testing purposed</p>

                        <sub>Author: Tamal</sub>
                    </div>
                </div>
            </div>


        </>

    )
}

export default Post
