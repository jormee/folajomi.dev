import React, { useContext } from "react";
import { useStaticQuery, graphql } from "gatsby"

import { ThemeContext } from '../contexts/themeContext'
import Nav from "./nav"

import "../styles/sharedComponents.scss"
import "../styles/layout.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
          author
        }
      }
    }
  `)

  const { theme } = useContext(ThemeContext)

  const route = children[0].props.title

  return (
    <div className={`layout ${theme}`}>
      <Nav siteTitle={data.site.siteMetadata.title} route={route} />
      <main>{children}</main>
      <footer>
        &copy;{new Date().getFullYear()}. Powered by <a href="https://gatsbyjs.org" target="_blank" rel="noreferrer noopener">Gatsby</a>
      </footer>
    </div>
  )
}

export default Layout
