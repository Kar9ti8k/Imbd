'use client'
import { MdDarkMode, MdLightMode } from 'react-icons/md'
import React from 'react'
import { useTheme } from 'next-themes'
const DarkMode = () => {
  const { theme, setTheme, systemTheme } = useTheme()
  const currentTheme = theme === 'system' ? systemTheme : theme
  return <div>{currentTheme === 'dark' ? <MdLightMode /> : <MdDarkMode />}</div>
}

export default DarkMode
