import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import '../../App.css';
import axios from 'axios';

const Signup = () => {

   const [name, setName] = useState("");
   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");

   // form 
   const handleSubmit = (e) => {
      e.preventDefault();
      console.log(name,email, password)
   }

   return (
      <div className='form-1'>
         <h1>SignUp</h1>

         <div className="input-box">
            <input
               type="text"
               value={name}
               onChange={(e) => setName(e.target.value)}
               placeholder='Name'
               required
            />
            <input
               type="email"
               value={email}
               onChange={(e) => setEmail(e.target.value)}
               placeholder='Email'
               required
            />
            <input
               type="password"
               value={password}
               onChange={(e) => setPassword(e.target.value)}
               placeholder='Password'
               required
            />
            <div className="button-submit">
               <button
                  type="submit"
                  placeholder='submit'
                  onClick={handleSubmit}
               >
               Signup
               </button>
            </div>

         </div>

         <p className='headline-login'>
            <Link to="/login">Login</Link>
         </p>
      </div>
   )
}

export default Signup