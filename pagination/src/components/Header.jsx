import React from 'react'
import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
   return (
      <>
         <div className="header">
            <div className="arrow0">
               <Link to="/page3">
                  ‹
               </Link>
            </div>
            <div className="page">
               <Link to='/page1'> 1 </Link>
            </div>
            <div className="page">
               <Link to='/page2'> 2 </Link>
            </div>
            <div className="page">
               <Link to='/page3'> 3 </Link>
            </div>
            <div className="arrow1">
               <Link to="/page1">
                  ›
               </Link>
            </div>
         </div>
      </>
   )
}

export default Header