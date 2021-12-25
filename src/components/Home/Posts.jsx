//* Multiple posts will be shown here
//* Those posts will be coming from post.jsx

import React from 'react'
import Post from './Post'
import "../../styles/Posts.css"
import { Link } from 'react-router-dom';

const Posts = () => {

    let allposts = [1, 2, 3, 4, 5, 6, 7, 8, 9];

    return (

        <div className="posts_parent1 container-fluid">
            {allposts.map(post => (
                <Link className='post_link' to={'/details'}><Post /></Link>
            ))}

        </div>


    )
}

export default Posts
