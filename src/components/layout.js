import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Nav from "./nav"
import "../styles/themeStyles.scss"
import "../styles/sharedComponents.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Nav siteTitle={data.site.siteMetadata.title} />
      <main>{children}</main>
      <footer>
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a> by {}
      </footer>
    </>
  )
}

export default Layout
