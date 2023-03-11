import React from 'react'
import '../components/Chart.css';
import { Sidebar } from '../components/Sidebar';

export const Chart = () => {
   return (
      <>
         <Sidebar />
         <div className="chart-container">
            <h1>Chart Page</h1>
         </div>
      </>
   )
}
