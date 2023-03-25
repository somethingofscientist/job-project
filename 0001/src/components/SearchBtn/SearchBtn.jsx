import React from 'react'
import './SearchBtn.css';

export const SearchBtn = () => {
   return (
      <>
         <div className="main">
            <div className="container">
               <div className="btn">Button</div>
               <div className="search">
                  <span className="search-word">
                  Search
                     {/* <input type="text" placeholder='Search' /> */}
                  </span>
                  <span className="icon">
                  <i class="fa-solid fa-magnifying-glass"></i>
                  </span>
               </div>
            </div>
         </div>
      </>
   )
}
