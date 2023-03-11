import React from 'react'
import { Sidebar } from '../components/Sidebar';
import '../components/Index.css';

export const Index = () => {
   return (
      <>
         <Sidebar />
         <div className="index-container">
            <h1>Welcome To The Coin App</h1>
            <br />
            <h3>Use SideNavbar To Check : </h3>
            <h3>Coins Statements</h3>
            <h3>Chart</h3>
         </div>
      </>
   )
}
