"use client"
import React, { useEffect } from 'react'

const Error = ({ error, reset }) => {

   useEffect(() => {
      console.log(error)
   }, [error])

   return (
      <div className='text-center mt-10'>
         <h1>Something Went Wrong</h1>
         <button className='mt-5 font-black hover:text-amber-600 bg-slate-300 p-2 rounded-lg' onClick={() => reset()}>Try Again</button>
      </div>
   )
}

export default Error