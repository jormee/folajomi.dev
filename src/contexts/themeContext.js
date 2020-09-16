import React, { createContext, useState, useEffect } from 'react'

const defaultTheme = {
  isLightTheme: true,
  themeToggle: ()=>{}
}

export const ThemeContext = createContext(defaultTheme)

const ThemeContextProvider = ({ children }) => {
  const [ isLightTheme, setTheme ] = useState(defaultTheme.isLightTheme)
  const themeToggle = () => setTheme(!isLightTheme)
  
  return(
    <ThemeContext.Provider value={{themeToggle, isLightTheme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider