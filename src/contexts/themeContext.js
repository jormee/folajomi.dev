import React, { createContext, useState, useEffect } from 'react'

const defaultTheme = {
  isLightTheme: false,
  themeToggle: ()=>{}
}

export const ThemeContext = createContext(defaultTheme)

const ThemeContextProvider = ({ children }) => {
  const [ isLightTheme, setTheme ] = useState(defaultTheme.isLightTheme)

  const theme = isLightTheme ? "light" : "dark" 
  const themeToggle = () => {
    setTheme(!isLightTheme)
    localStorage.setItem("theme", JSON.stringify({ isLightTheme: !isLightTheme}))
  }

  useEffect(() => {
    // check if user has previously set the color theme for the app and use the theme if already set.
    localStorage.getItem("theme") && setTheme(JSON.parse(localStorage.getItem("theme")).isLightTheme)
  }, [])
  
  return(
    <ThemeContext.Provider value={{themeToggle, isLightTheme, theme}}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeContextProvider