import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { useNavigate, useParams, Link } from "react-router-dom";

const EditForm = (props) => {
    const { id } = useParams();
    const [newName, setNewName] = useState('');
    const navigate = useNavigate();
    
    useEffect(() => {
        axios.get('http://localhost:8000/api/authors/' + id)
            .then(res => {
                setNewName(res.data.author.name);
                console.log(res.data.author)
            })
            .catch((err) => {
                console.log('Error with axios get', err)
            })
    }, []);
    
    const updateAuthor = e => {
        e.preventDefault();
        axios.patch('http://localhost:8000/api/authors/' + id, {
            name: newName
        })
            .then(res=> {
                console.log(res)
                navigate ('/')
            })
            .catch(err => console.error(err));
    }
    
    return (
        <div className='contanier p-5'>
            <div class="card shadow">
                <div class="card-header">
                    <h1>Edit this author </h1>
                </div>
                <div className="card-body text-center">
                    <form onSubmit={updateAuthor}>
                        <p className='d-flex gap-3'>
                            <label htmlFor='update-name' className='fw-bold'>Name: </label><br/>
                            <input id='update-name' type="text" onChange={(e)=>setNewName(e.target.value)} value={newName}/>
                        </p>
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

export default EditForm;