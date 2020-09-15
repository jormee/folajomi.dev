import React from 'react'

import Layout from '../components/layout'
import SEO from '../components/seo'
import aboutImg from '../images/about.png'

import '../styles/sharedComponents.scss'

const About = () => {
  return(
    <Layout>
      <SEO title="about me - Folajomi"/>
      <div className="container about">
        <section className='section-header'>
          <img src={aboutImg} alt='about me' className='section-img' />
          <div className='page-description'>
            <h1 className='page-title'>About Me</h1>
            <div className='section-description'>
              <p>Hey there <span role='image' alt="waving hand">👋</span>, I'm Folajomi Shotunde, Project Manager, Front-End Web Developer, Web Designer and compulsive brooder.</p>
              <p>I am particularly drawn towards artful and functional designs and work towards attaining wonderful projects and great user experience.</p>
              <p>When I am not designing/coding websites, I might be found brooding or analysing crypto markets (huge fan).</p>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  )
}

export default About