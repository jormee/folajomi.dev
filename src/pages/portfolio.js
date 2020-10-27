import React from 'react'
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from '../components/seo'
import '../styles/sharedComponents.scss'
import '../styles/portfolio.scss'

import projectImg from '../images/hero-img.jpg'
import portfolioImg from '../images/portfolio.png'
import GitHub from '../icons/github.svg'
import Web from '../icons/globe.svg'

export const allProjects = graphql`
  query{
    allGithubData{
      edges{
        node{
          data{
            user{
              pinnedItems{
                edges{
                  node{
                    name
                    description
                    homepageUrl
                    url
                    repositoryTopics{
                      edges{
                        node{
                          topic{
                            name
                          }
                        }
                      }
                    }
                  }
                }
              }
            }
          }
        }
      }
    }
  }
`
const ProjectCard = ({ project }) => {

  return(
    <div className="project-card card">
      <img className="project-image" src={projectImg} alt="project" />
      <div className="project-details">
        <h3 className="project-title">{project.name}</h3>
        <p className="project-description">{project.description}</p>
        <div className="project-links">
          <a href={project.url} target="_blank" rel="noopener noreferrer" aria-label="github-link"><GitHub /></a>
          <a href={project.homepageUrl} target="_blank" rel="noopener noreferrer" aria-label="url"><Web /></a>
        </div>
      </div>
    </div>
  )
}

const Portfolio = ({ data }) => {
  const projectsData = data.allGithubData.edges[0].node.data.user.pinnedItems.edges.map(({ node })=> node)

    return(
      <Layout>
        <SEO title="Portfolio" />
        <section className="portfolio">
          <div className="container">
            <div className='section-header'>
              <img src={portfolioImg} alt='portfolio' className='section-img'/>
              <div className='page-description'>
                <h1 className="page-title">Portfolio</h1>
                <p className='section-description'>Here, you’ll find my projects (only the amazing ones). Visit my <a href='https://github.com/jormee' target='_blank' rel="noopener noreferrer">GitHub</a> and/or <a href='https://github.com/jormee' target='_blank' rel="noopener noreferrer">GitLab</a> to view a plethora of uncompleted and bizzare projects and wonderful collections of resources.</p>
              </div>
            </div>
            <div className="cards">
              <ul className='project-cards'>
                {
                  projectsData.map(project => <li key={project.name}><ProjectCard project={project}/></li>)
                }
              </ul>
            </div>
          </div> 
        </section>
      </Layout>
    )
}

export default Portfolio