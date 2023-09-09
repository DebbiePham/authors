import React from 'react';
import { Routes, Route, Link } from "react-router-dom";
import Main from './views/Main';
import CreateForm from './views/CreateForm';
import EditForm from './views/EditForm';


function App() {
  return (
    <div className="App">
        <nav className='navbar navbar-expand-lg bg-body-tertiary'>
          <div class="container-fluid">
            <h1>Favorite Authors</h1>
            <div>
              <Link to='/' className='m-5'>Dashboard</Link>
              <Link to='/authors/new' className='m-5'>Add an author</Link>
            </div>
          </div>
        </nav>
        <hr />

      <Routes>
        <Route path='/' element={<Main/>} />
        <Route path='/authors/new' element={<CreateForm/>} />
        <Route path='/authors/:id/edit' element={<EditForm/>} />
      </Routes>
    </div>
  );
}

export default App;
