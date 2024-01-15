import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
const SignUp = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [Password, setPassword] = useState('');
  //Redirect the Home page
  const naviagte = useNavigate();

  //useEffect lifecycle
  useEffect(() => {
    const auth = localStorage.getItem('user');
    if (auth) {
      naviagte('/');
    }
  });
  const collectData = async () => {
    console.log(name, email, Password);
    let result = await fetch('http://localhost:5000/register', {
      method: 'post',
      body: JSON.stringify({ name, email, Password }),
      headers: {
        'Content-Type': 'application/json',
      },
    });
    result = await result.json();
    console.log(result);
    localStorage.setItem('user', JSON.stringify(result.result));
    localStorage.setItem('token', JSON.stringify(result.auth));
    if (result) {
      naviagte('/');
    }
  };

  return (
    <div className='register'>
      <h1>Regiter</h1>
      <input
        className='inputBox'
        type='text'
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
        placeholder='Enter Name'
      />
      <input
        className='inputBox'
        type='text'
        value={email}
        onChange={(e) => {
          setEmail(e.target.value);
        }}
        placeholder='Enter Email'
      />
      <input
        className='inputBox'
        type='Password'
        value={Password}
        onChange={(e) => {
          setPassword(e.target.value);
        }}
        placeholder='Enter Password'
      />
      <button onClick={collectData} className='appbutton' type button>
        Sign Up
      </button>
    </div>
  );
};
export default SignUp;
