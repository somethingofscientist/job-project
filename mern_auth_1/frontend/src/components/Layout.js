import React from 'react'
import { Link } from 'react-router-dom'
import '../App.css';

const Layout = ( ) => {
  return (
   <>
      <div className="container">
         <div className="login">
            <Link to="/login">Go to the Login page here</Link>
         </div>

         {/* <br/> */}
         <p>OR</p>
         {/* <br/> */}

         <div className="Signup">
            <Link to="/signup">Go to the Signup page here</Link>
         </div>
      </div>
   </>
  )
}

export default Layout