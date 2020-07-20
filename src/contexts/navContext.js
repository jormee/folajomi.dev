import React, { useState, createContext } from 'react'

const navState = {
    sidebarOpen: true
}

export const NavContext = createContext(navState)

const NavContextProvider = ({ children }) => {
    const [ sidebarOpen, setSidebarState ] = useState(navState.sidebarOpen)
    const toggleSidebar = () => setSidebarState(!sidebarOpen)

    return(
        <NavContext.Provider value={{ sidebarOpen, toggleSidebar }}>
            {children}
        </NavContext.Provider>
    )
}

export default NavContextProvider