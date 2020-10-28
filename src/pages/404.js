import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import errorImage from "../images/404.png"

import "../styles/sharedComponents.scss"
import "../styles/404.scss"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <div className="container">
      <div className="error-div">
        <img src={errorImage} alt="error" />
        <p className="text">You just hit a route that doesn&#39;t exist.</p>
      </div>
    </div>
  </Layout>
)

export default NotFoundPage
