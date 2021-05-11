import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"
import Emblem from '../images/emblem.png'

import Github from '../icons/github.svg'
import Behance from '../icons/behance.svg'
import Blog from '../icons/blog.svg'
import Thoughts from '../icons/thoughts.svg'

import LogoJs from '../icons/javascript.svg'
import LogoNd from '../icons/nodejs.svg'
import LogoGq from '../icons/graphql.svg'
import LogoRx from '../icons/reactjs.svg'
import LogoGa from '../icons/gatsby.svg'


import '../styles/sharedComponents.scss'
import '../styles/about.scss'

const IndexPage = () => {
  return(
    <Layout>
      <SEO title="About Me" />
        <div className="container about">

          <img src={Emblem} alt="page-logo" />
          <div className="page">
            <section className="page-header">
              <h1 className='page-title'>About Me</h1>
              <p className="page-description">
                Hey there <span role='img' aria-labelledby="waving hand">👋</span>, I'm Folajomi Shotunde, Web Designer, Front-End Web developer and Project Manager from Lagos, Nigeria.
              </p>
            </section>

            <div>
              <section className="page-section">
                <h2 className="section-title">Spaces</h2>
                <ul className="spaces">
                  <li className="space">
                    <p className="space-icon"><Github /></p>
                    <p className="space-name">Github</p>
                  </li>
                  <li className="space">
                    <p className="space-icon"><Behance /></p>
                    <p className="space-name">Behance</p>
                  </li>
                  <li className="space">
                    <p className="space-icon"><Blog /></p>
                    <p className="space-name">Blog</p>
                  </li>
                  <li className="space">
                    <p className="space-icon"><Thoughts /></p>
                    <p className="space-name">Thoughts</p>
                  </li>
                </ul>
              </section>

              <section className="page-section">
                <h2 className="section-title">Stack</h2>
                <ul className="stack">
                  <li className="space">
                    <p className="space-icon"><LogoJs /></p>
                    <p className="space-name">Javascript</p>
                  </li>
                  <li className="space">
                    <p className="space-icon"><LogoNd /></p>
                    <p className="space-name">NodeJS</p>
                  </li>
                  <li className="space">
                    <p className="space-icon"><LogoRx /></p>
                    <p className="space-name">React</p>
                  </li>
                  <li className="space">
                    <p className="space-icon"><LogoGq /></p>
                    <p className="space-name">GraphQL</p>
                  </li>
                  <li className="space">
                    <p className="space-icon"><LogoGa /></p>
                    <p className="space-name">Gatsby</p>
                  </li>
                </ul>
              </section>
            </div>
          </div>
        </div>
    </Layout>
  )
}

export default IndexPage
