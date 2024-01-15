import React from 'react';
import './App.css';
import Nav from './component/Nav';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './component/Footer';
import SignUp from './component/SignUp';
import PrivateComponent from './component/PrivateComponent';
import AddProduct from './component/AddProduct';
import ProductList from './component/ProductList';
import UpdateProduct from './component/UpdateComponent';
// import SignUp from './component/SignUp';
import Login from './component/Login';

function App() {
  return (
    <div className='App'>
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route element={<PrivateComponent />}>
            <Route path='/' element={<ProductList />} />
            <Route path='/add' element={<AddProduct />} />
            <Route path='update/:id' element={<UpdateProduct />} />
            <Route path='/logout' element={<h1>Logout product Component</h1>} />
            <Route
              path='/profile'
              element={<h1>Profile Product Component</h1>}
            />
          </Route>

          <Route path='/signup' element={<SignUp />} />
          <Route path='/login' element={<Login />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </div>
  );
}

export default App;
