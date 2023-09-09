import React, { useEffect, useState } from "react";
import axios from 'axios';
import AuthorList from '../components/AuthorList';


const Main = () => {

    const [authors, setAuthors] = useState([]);
    const [loaded, setLoaded] = useState(false);

    const deleteAuthor = (id) => {
        axios
            .delete(`http://localhost:8000/api/authors/${id}`)
            .then(setLoaded(!loaded))
            .catch((err) => console.log(err))
    };

    const fetchAuthors = () => {
        axios
            .get("http://localhost:8000/api/authors")
            .then((res) => {
                setAuthors(res.data.authors);
                setLoaded(!loaded);
            })
            .catch((err) => console.error(err));
    };

    useEffect(fetchAuthors, [loaded]); // Pass an empty dependency array to run the effect one 
    return (
        <div>
            <AuthorList authors={authors} deleteAuthor={deleteAuthor} />
        </div>
    );
};

export default Main;

