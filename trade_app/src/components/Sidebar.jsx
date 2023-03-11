import React from 'react'
import './Sidebar.css'
import { GiTwoCoins } from 'react-icons/gi';
import { BsFillBarChartFill } from 'react-icons/bs';
import { AiFillMoneyCollect } from 'react-icons/ai';
import { Link } from 'react-router-dom'

export const Sidebar = () => {
   return (
      <>
         <div className="container-sidebar">
            <Link to="/">
               <div className="logo-sidebar">
                  <AiFillMoneyCollect />
               </div>
            </Link>
            <Link to="/home">
               <div className="coin-sidebar">
                  <GiTwoCoins />
               </div>
            </Link>
            <Link to="/chart">
               <div className="coin-sidebar">
                  <BsFillBarChartFill />
               </div>
            </Link>
         </div>
      </>
   )
}
