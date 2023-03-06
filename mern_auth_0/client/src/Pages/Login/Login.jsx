import React, { useState } from 'react'
import './Login.css';
import { request } from '../../utils/fetchApi';
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from '../../redux/authSlice';

const Login = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleLogin = async (e) => {
    e.preventDefault();

    if (email === '' || password === '') {
      return
    }

    try {
      const options = { 'Content-Type': 'application/json' }
      const data = await request('/auth/login', "POST", options, { email, password })
      console.log(data);
      dispatch(login(data));
      navigate('/');
    }
    catch (error) {
      console.log(error.message);
    }
  }
  return (
    <div className="l-container">
      <div className="l-wrapper">
        <h2>Login</h2>
        <form onSubmit={handleLogin} >
          <input type="email" placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder='Password' onChange={(e) => setPassword(e.target.value)} />
          <button type='submit' >Login</button>
          <p>Create an account ? <Link to="/register" >Register</Link> </p>
        </form>
      </div>
    </div>
  )
}

export default Login