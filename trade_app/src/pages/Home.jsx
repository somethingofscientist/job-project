import React from 'react'
import { Chatbox } from '../components/Chatbox'
import { Heading } from '../components/Heading'
import { Main__Trade } from '../components/Main__Trade';
import { Sidebar } from '../components/Sidebar';
import '../components/Sidebar.css';

export const Home = () => {
   return (
      <>
         <div className="main-container">
            <Sidebar />
            <div className="heading-in-one">
               <Heading />
               <div className="main-container">
                  <Main__Trade />
                  <Chatbox />
               </div>
            </div>
         </div>
      </>
   )
}
