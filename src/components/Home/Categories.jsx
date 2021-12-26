//* This is the categories dropdown and buttons on the left of the homepage

import React from 'react'
import { Link } from 'react-router-dom'
import "../../styles/Categories.css"
import { blog_cat } from "../constants/Data"

const Categories = () => {
    return (
        <>
            <div className="container cat_parent1">
                <Link to={'/create'}><button type="button" class="btn btn-info create_blog" >Create Blog</button></Link>

                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton1" data-bs-toggle="dropdown" aria-expanded="false">
                        Catagories
                    </button>
                    <ul class="dropdown-menu" aria-labelledby="dropdownMenuButton1">
                        {blog_cat.map(category => (
                            <li className='dropdown-item cat_items'>{category} </li>
                        ))}

                    </ul>
                </div>
            </div>
        </>
    )
}

export default Categories
