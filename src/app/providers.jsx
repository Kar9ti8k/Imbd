'use clinet'
import React from 'react'
import { useTheme } from 'next-themes'
import { ThemeProvider } from 'next-themes'
const Providers = ({ children }) => {
  return (
    <div>
      <ThemeProvider attribute='class' defaultTheme='system'>
        {children}
      </ThemeProvider>
    </div>
  )
}

export default Providers
