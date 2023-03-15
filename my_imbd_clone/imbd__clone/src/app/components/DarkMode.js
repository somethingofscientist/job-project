"use client"
import React from 'react'
import { MdOutlineDarkMode } from 'react-icons/md';
import { BiSun } from 'react-icons/bi';
import { useTheme } from 'next-themes';

export const DarkMode = () => {
   const { systemTheme, theme, setTheme } = useTheme()
   const currentTheme = theme === "system" ? systemTheme : theme

   return (
      <>
         {currentTheme === 'dark' ? (
            <BiSun
               onClick={() => setTheme('light')}
               className="text-xl cursor-pointer hover:text-amber-500"
            />
         ) : (
            <MdOutlineDarkMode
               onClick={() => setTheme('dark')}
               className="text-xl cursor-pointer hover:text-amber-500"
            />
         )}
      </>
   )
}
