import React, { createContext, useState, useEffect } from 'react'

const defaultTheme = {
  isLightTheme: false,
  themeToggle: ()=>{}
}

export const ThemeContext = createContext(defaultTheme)

const ThemeContextProvider = ({ children }) => {
  const [ isLightTheme, setTheme ] = useState(defaultTheme.isLightTheme)

  const theme = isLightTheme ? "light" : "dark" 
  const themeToggle = () => setTheme(!isLightTheme)
  
  return(
    <ThemeContext.Provider value={{themeToggle, isLightTheme, theme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider