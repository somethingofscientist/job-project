import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
   return (
      <div className="footer">
         <footer className="footer-main">
            <ul className="footer-main-main">
               <li className="footer-nav-item"><Link to="/" >Home</Link></li>
               <li className="footer-nav-item"><Link to="/about" >About</Link></li>
               <li className="footer-nav-item"><Link to="/contact" >Contact</Link></li>
               <li className="footer-nav-item"><Link to="/policy" >Policy</Link></li>
            </ul>
            <hr />
            <p className="footer-span">© 2023 Sahil Shopping Cart Website Company, Inc</p>
         </footer>
      </div>
   )
}

export default Footer