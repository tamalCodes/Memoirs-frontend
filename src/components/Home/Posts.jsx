//* Multiple posts will be shown here
//* Those posts will be coming from post.jsx

import React, { useEffect, useState } from 'react'
import Post from './Post'
import "../../styles/Posts.css"
import { Link } from 'react-router-dom';
import { getallPosts } from '../../service/Api';

const Posts = () => {
    //* USestate hook to store all the values so that they can be mapped once
    const [allposts, setallposts] = useState([]);

    //* Async function to call the getallposts function which was imported earlier
    const fetchData = async () => {
        const fetchedData = await getallPosts();
        setallposts(fetchedData);
    }

    //* Useffect hook to display all the notes once
    useEffect(() => {
        fetchData();
    }, []);

    return (

        <div className="posts_parent1 container-fluid">
            {allposts.map(post => (
                <Link className='post_link' to={`/details/${post._id}`} state={{ from: `${post._id}` }}><Post post={post} key={post._id} /></Link>
            ))}

        </div>


    )
}

export default Posts
