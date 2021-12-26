import React from 'react'
import "../../styles/UpdateView.css"
import AddCircleIcon from '@mui/icons-material/AddCircle';

const UpdateView = () => {
    return (
        <>
            <div className="container">
                <img className='up_img' src="https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="create" />
            </div>

            <div className="container crt_parent2">
                <form className='up_form'>
                    <div class="mb-3">

                        <input type="text" class="form-control up_title" aria-describedby="emailHelp" placeholder='Title' />

                    </div>
                    <div class="mb-3">

                        <textarea class="form-control up_desc" id="exampleFormControlTextarea1" rows="3" placeholder='Tell your story . . . '></textarea>


                    </div>

                    <button type="submit" class="btn btn-primary up_button">Update</button>
                </form>
            </div>
        </>
    )
}

export default UpdateView
