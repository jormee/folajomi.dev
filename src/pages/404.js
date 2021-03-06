import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import errorImage from "../images/404.png"

import "../styles/sharedComponents.scss"

const NotFoundPage = () => {

  return(
    <Layout>
      <SEO title="404: Not found" />
      <div className="container do-hyeon">
        <img src={errorImage} alt="error" />
        <p className="text">You just hit a route that doesn&#39;t exist.</p>
      </div>
    </Layout>
  )
}

export default NotFoundPage
