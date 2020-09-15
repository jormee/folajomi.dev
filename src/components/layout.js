import React from "react"
import { useStaticQuery, graphql } from "gatsby"

import Nav from "./nav"
import "../styles/themeStyles.scss"
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

  return (
    <div className="layout">
      <div className="content">
        <Nav siteTitle={data.site.siteMetadata.title} />
        <main>{children}</main>
      </div>
      <footer className="footer">
        © {new Date().getFullYear()}, Built with
        {` `}
        <a href="https://www.gatsbyjs.org">Gatsby</a> by {data.site.siteMetadata.author}
      </footer>
    </div>
  )
}

export default Layout
