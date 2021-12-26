//* Axios requests will be made on submitting the form
//* Links to the request will be present on service/Api.js

import React, { useState } from 'react'
import "../../styles/CreateView.css"
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { createPost } from '../../service/Api';

const CreateView = () => {

    const initialValues = { title: "", description: "", picture: "", username: "tamal", categories: "all", date: new Date() }

    //* useState to store and update the values
    const [post, setPost] = useState(initialValues);

    //* handleChange function
    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value })
    }

    //* HandleSubmit function
    const handleSubmit = async (e) => {
        e.preventDefault();
        await createPost(post);
    }
    return (
        <>
            {/* //* Image */}

            <div className="container">
                <img className='crt_img' src="https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="create" />
            </div>

            {/* //* Form */}

            <div className="container crt_parent2">
                <form className='crt_form' >
                    <div class="mb-3 crt_title_parent">
                        <AddPhotoAlternateIcon className='crt_addIcon' />
                        <input type="text" class="form-control crt_title" aria-describedby="emailHelp" placeholder='Title' name='title' onChange={handleChange} value={post.title} />

                    </div>
                    <div class="mb-3">

                        <textarea class="form-control crt_desc" id="exampleFormControlTextarea1" rows="3" placeholder='Tell your story . . . ' name='description' onChange={handleChange} value={post.description}></textarea>


                    </div>

                    <button type="submit" class="btn btn-primary crt_button" onClick={handleSubmit} >Publish</button>
                </form>
            </div>
        </>
    )
}

export default CreateView
