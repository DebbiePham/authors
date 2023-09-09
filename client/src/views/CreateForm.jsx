import React, { useState } from 'react'
import axios from 'axios';
import { useNavigate, Link } from "react-router-dom";

const CreateForm = () => {
    //keep track of what is being typed via useState hook
    const [name, setName] = useState(""); 
    const navigate = useNavigate();
    const [error, setError] = useState()

    //handler when the form is submitted
    const onSubmitHandler = e => {

        //prevent default behavior of the submit
        e.preventDefault();

        //make a post request to create a new product
        axios.post('http://localhost:8000/api/authors', { name })
            .then(res=> {
                console.log(res)
                setName('')
                navigate('/');
            })
            .catch((err) => {
                const errorResponse = err.response.data.errors;
                console.log(errorResponse.name.message);
                setError(errorResponse.name.message);
            });
    };

    return (
        <div className="container p-5">
            <div className="card shadow p-4">
                <div className='card-header'>
                    <h1>Add a new author</h1>
                </div>
                <div className="card-body text-center">
                    <form onSubmit={onSubmitHandler}>
                        <div className='d-flex gap-3 mb-3'>
                            <label htmlFor='name' className='fw-bold'>Name: </label><br/>
                            <input id='name' type="text" onChange={(e)=>setName(e.target.value)} value={name}/>
                            {error && <p className='text-danger'>{error}</p>}
                        </div>
                        <div className='card-footer text-start'>
                            <input type="submit" className='btn btn-success m-3'/>
                            <Link to = '/' className='btn btn-primary'>Cancel</Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default CreateForm;