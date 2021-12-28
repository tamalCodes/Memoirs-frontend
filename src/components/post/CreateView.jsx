//* Axios requests will be made on submitting the form
//* Links to the request will be present on service/Api.js

import React, { useEffect, useState } from 'react'
import "../../styles/CreateView.css"
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import { createPost, uploadFile } from '../../service/Api';
import { useNavigate } from 'react-router-dom';

const CreateView = () => {
    const navigate = useNavigate();

    const initialValues = { title: "", description: "", picture: "", username: "rahul", categories: "Tech", date: new Date() }

    //* useState to store and update the values
    const [post, setPost] = useState(initialValues);
    const [file, setFile] = useState('');
    const [image, setImage] = useState('');

    const img_url = post.picture ? post.picture : "https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"

    //* handleChange function   
    const handleChange = (e) => {
        setPost({ ...post, [e.target.name]: e.target.value })
    }

    //* HandleSubmit function
    const handleSubmit = async (e) => {
        e.preventDefault();
        await createPost(post);
        navigate("/");
    }

    //* Image selection
    const handleImage = (e) => {
        setFile(e.target.files[0])
    }

    //* Useeffect to call API when image is changed
    useEffect(() => {
        const getImage = async () => {
            if (file) {
                const data = new FormData();
                data.append("name", file.name);
                data.append("file", file);
                const image = await uploadFile(data);
                post.picture = image;
                setImage(image);
            }
        }
        getImage();
        // post.categories = location.search?.split('=')[1] || 'All'
        // post.username = account;
    }, [file])


    return (
        <>
            {/* //* Image */}

            <div className="container">
                <img className='crt_img' src={img_url} alt="create" />
            </div>

            {/* //* Form */}

            <div className="container crt_parent2">
                <form className='crt_form' >
                    <div class="mb-3 crt_title_parent">
                        <label htmlFor="fileInput"> <AddPhotoAlternateIcon className='crt_addIcon' /></label>
                        <input type="file" name="fileInput" id="fileInput" className='d-none' onChange={handleImage} />
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
