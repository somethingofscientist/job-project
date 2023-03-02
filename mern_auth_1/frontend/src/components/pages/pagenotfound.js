import React from 'react'
import { Link } from 'react-router-dom'

const pagenotfound = () => {
   return (
      <>
         <Link to="/">
            <div className="page">
               <h1 className='pageh1'>Page Not Found !!</h1> <br/>
               {/* <h>click here to go to the main page</h> */}
            </div>
         </Link>
      </>
   )
}

export default pagenotfound