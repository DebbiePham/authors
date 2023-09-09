import { Link } from 'react-router-dom';
import React from 'react';
    
const AuthorList = (props) => {
    const {deleteAuthor} = props;

    return (
        <div className='container'>
            <div>
                <h4>We have quotes by:</h4>
                <table className='table table-hover'>
                    <thead>
                        <th scope='col'>Authors</th>
                        <th scope='col'>Actions available</th>
                    </thead>
                    <tbody className=' table-striped'>
                    {props.authors.map((author, idx) => {
                        return (
                            <tr key={idx}>
                                <td>{author.name}</td>
                                <td>
                                    <Link to={`/authors/${author._id}/edit`} className='btn btn-warning'>Edit</Link>
                                    <button className='btn btn-danger m-2' onClick={() => deleteAuthor(author._id)}>Delete</button>
                                </td>
                            </tr>
                        );
                    })}
                    </tbody>
                </table>
            </div>
        </div>
    );
}
    
export default AuthorList;






