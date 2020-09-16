/**
 * Implement Gatsby's Browser APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/browser-apis/
 */
// You can delete this file if you're not using it
import React from 'react'

import NavContextProvider from './src/contexts/navContext'
import ThemeContextProvider from './src/contexts/themeContext'

export const wrapRootElement = ({ element }) => {
    return (
        <ThemeContextProvider>
            <NavContextProvider>
                {element}
            </NavContextProvider>
        </ThemeContextProvider>
    )
}
