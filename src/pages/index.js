import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Hero from "../components/hero"
import aboutImg from '../images/about.png'


import '../styles/sharedComponents.scss'

const IndexPage = () => {
  return(
    <Layout>
      <SEO title="Home" />
      <Hero />
      <section className="about">
        <div className="container">
          <div className='section-header'>
            <img src={aboutImg} alt='about me' className='section-img' />
            <div className='page-description'>
              <h1 className='page-title'>About Me</h1>
              <div className='section-description'>
                <p>Hey there <span role='img' aria-labelledby="waving hand">👋</span>, I'm Folajomi Shotunde, Project Manager, Front-End Web Developer, Web Designer and compulsive brooder.</p>
                
                <p>When I am not designing/coding websites, I might be found brooding or analysing crypto markets (huge fan).</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  )
}

export default IndexPage
