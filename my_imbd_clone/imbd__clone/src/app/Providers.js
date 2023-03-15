"use client"
import { ThemeProvider } from "next-themes";


import React from 'react'

export const Providers = ({ children }) => {
   return (
      <ThemeProvider enableSystem={true} attribute="class">
         {children}
      </ThemeProvider>
   )
}
