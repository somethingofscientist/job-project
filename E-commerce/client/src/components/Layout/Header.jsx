import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FcShop } from 'react-icons/fc'
import { useAuth } from '../../Context/Auth'
import toast from "react-hot-toast";


const Header = () => {

   const [auth, setAuth] = useAuth();
   const handleLogout = () => {
      setAuth({
         ...auth,
         user: null,
         token: "",
      });
      localStorage.removeItem("auth")
      toast.success("Logout Successfully");
   }

   return (
      <nav className="navbar navbar-expand-lg">
         <div className="container-fluid">
            <Link className="navbar-brand" to="/"> <FcShop></FcShop>  Ecommerce</Link>
            <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
               <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <li className="nav-item">
                     <Link to="/" className="nav-link">Home</Link>
                  </li>

                  {/* TERNARY OPERTAOR FOR THE REGISTER AND LOGIN SHOW AND UNSHOW */}

                  {!auth.user ?
                     (
                        <>
                           <li className="nav-item">
                              <Link to="/register" className="nav-link" >Register</Link>
                           </li>
                           <li className="nav-item">
                              <Link to="/login" className="nav-link" >Login</Link>
                           </li>
                        </>

                     ) : (

                        <>
                           <li className="nav-item">
                              <Link to="/login" onClick={handleLogout} className="nav-link" >Logout</Link>
                           </li>
                        </>)
                  }
                  <li className="nav-item">
                     <Link to="/about" className="nav-link" >About</Link>
                  </li>
                  <li className="nav-item">
                     <Link to="/contact" className="nav-link" >Contact</Link>
                  </li>
                  <li className="nav-item">
                     <Link to="/policy" className="nav-link" >Policy</Link>
                  </li>
                  <li className="nav-item">
                     <Link to="/cart" className="nav-link" >Cart(6) </Link>
                  </li>
               </ul>
            </div>
         </div>
      </nav>
   )
}

export default Header