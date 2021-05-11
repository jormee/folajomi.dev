import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import shipping from "../images/shipping.png"

import "../styles/sharedComponents.scss"

const Talks = () => (
  <Layout>
    <SEO title="Talks" />
    <section className="container">
      <div className="page">
        <section className="shipping">
          <img src={shipping} alt="shipping soon" />
          <p className="text">This page will be shipping soon... Stay tuned.</p>
        </section>
      </div>
    </section>
  </Layout>
)

export default Talks
