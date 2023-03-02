import React from 'react'
import { Link } from 'react-router-dom'
import '../../App.css';


// form
const handleSubmit = (e) => {
   e.preventDefault();
}
const Login = () => {
   return (
      <>
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
            <div className="button-submit">
               <button
                  type="submit"
                  placeholder='submit'
               >
                  Login
               </button>
            </div>
         

         <p className='headline-login' onClick={handleSubmit}>
            <Link to="/signup" >SignUp</Link>
         </p>
         </div>
      </>
   )
}

export default Login