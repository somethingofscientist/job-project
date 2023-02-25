import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { FcShop } from 'react-icons/fc'
import { useAuth } from '../../Context/Auth'
import toast from "react-hot-toast";
import SearchInput from '../Forms/SearchInput';
import useCategory from '../Hooks/useCategory';

const Header = () => {

   const [auth, setAuth] = useAuth();
   const categories = useCategory();
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
               <span className="navbar-toggler-icon">

               </span>
            </button>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
               <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                  <SearchInput />
                  <li className="nav-item">
                     <Link to="/" className="nav-link">Home</Link>
                  </li>

                  <li className="nav-item dropdown">
                     <Link
                        className="nav-link dropdown-toggle"
                        to={"/categories"}
                        data-bs-toggle="dropdown"
                     >
                        Categories
                     </Link>
                     <ul className="dropdown-menu">
                        <li>
                           <Link className="dropdown-item" to={"/categories"}>
                              All Categories
                           </Link>
                        </li>
                        {categories?.map((c) => (
                           <li>
                              <Link
                                 className="dropdown-item"
                                 to={`/category/${c.slug}`}
                              >
                                 {c.name}
                              </Link>
                           </li>
                        ))}
                     </ul>
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

                           <li className="nav-item dropdown">
                              <Link className="nav-link dropdown-toggle" to="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                 {auth?.user?.name}
                              </Link>
                              <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                 <li>
                                    <Link to={`/dashboard/${auth?.user?.role === 1 ? 'admin' : 'user'
                                       }`} className="dropdown-item" >Dashboard</Link>
                                 </li>
                                 <li>
                                    <Link to="/login" className="dropdown-item" onClick={handleLogout}>Logout</Link>
                                 </li>
                              </div>
                           </li>
                        </>
                     )
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