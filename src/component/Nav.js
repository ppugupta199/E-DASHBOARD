import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

const Nav = () => {
  const auth = localStorage.getItem('user');
  //navigate() itself rerender the page.
  const navigate = useNavigate();
  const logout = () => {
    localStorage.clear();
    navigate('/signup');
    console.log('appu');
  };

  return (
    <div>
      <img
        alt='logo'
        className='logo'
        src='https://yt3.googleusercontent.com/ytc/AOPolaSpbKm2DF0CtKIde4QLZnbeabZON-IiDc1XqtYM0Q=s900-c-k-c0x00ffffff-no-rj'
      />
      {auth ? (
        <ul className='Nav-ul'>
          <li>
            <Link to='/'>Products</Link>
          </li>
          <li>
            <Link to='/add'>Add Product</Link>
          </li>
          <li>
            <Link to='/update'>Update Product</Link>
          </li>
          <li>
            <Link to='/profile'>Profile</Link>
          </li>
          <li>
            <Link onClick={logout} to='/signup'>
              Logout ({JSON.parse(auth).name})
            </Link>
          </li>
        </ul>
      ) : (
        <ul className='Nav-ul nav-right'>
          <li>
            <Link to='/signup'>Sign Up</Link>
          </li>
          <li>
            <Link to='/Login'>Login</Link>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Nav;
