import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css';

const Login = () => {
   return (
      <div className='form-1'>
         <h1>Login</h1>

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

         <p className='headline-login'>
            <Link to="/signup">SignUp</Link>
         </p>
      </div>
   )
}

export default Login