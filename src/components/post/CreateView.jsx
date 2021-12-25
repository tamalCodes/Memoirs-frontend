import React from 'react'
import "../../styles/CreateView.css"
import AddCircleIcon from '@mui/icons-material/AddCircle';

const CreateView = () => {
    return (
        <>
            <div className="container">
                <img className='crt_img' src="https://images.unsplash.com/photo-1543128639-4cb7e6eeef1b?ixid=MnwxMjA3fDB8MHxzZWFyY2h8Mnx8bGFwdG9wJTIwc2V0dXB8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80" alt="create" />
            </div>

            <form>
                <div class="mb-3">

                    <input type="text" class="form-control crt_title" aria-describedby="emailHelp" placeholder='Title' />

                </div>
                <div class="mb-3">

                    <input type="text" class="form-control crt_desc" aria-describedby="emailHelp" placeholder='Tell your story' />

                </div>

                <button type="submit" class="btn btn-primary">Submit</button>
            </form>
        </>
    )
}

export default CreateView
