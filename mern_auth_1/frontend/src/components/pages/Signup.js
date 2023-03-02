import React from 'react'
import { Link } from 'react-router-dom';
import '../../App.css';

const Signup = () => {
   return (
      <div className='form-1'>
         <h1>SignUp</h1>

         <div className="input-box">
            <input
               type="text"
               placeholder='Name'
            />
            <input
               type="email"
               placeholder='Email'
            />
            <input
               type="password"
               placeholder='Password'
            />
            <input
               type="submit"
               placeholder='submit'
            />
         </div>

         <p className='headline-login'>
            <Link to="/login">Login</Link>
         </p>
      </div>
   )
}

export default Signup