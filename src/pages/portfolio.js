import React from 'react'
import { graphql } from 'gatsby'

import Layout from "../components/layout"
import SEO from '../components/seo'
import '../styles/sharedComponents.scss'
import '../styles/portfolio.scss'
import GitHub from '../icons/github.svg'
import Web from '../icons/link.svg'

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
    <div className="project-card">
      <img src={`https://api.apiflash.com/v1/urltoimage?access_key=${process.env.GATSBY_SCREENSHOT_ACCESS_KEY}&url=${project.homepageUrl}`} className="project-image" alt="project screenshot"/>
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
        <div className="container">

          <div className="page">
            <section className='page-header'>
              <h1 className="page-title">Portfolio</h1>
              <p className='page-description'>
                Here, you’ll find my projects (only the amazing ones). Visit my <a href='https://github.com/jormee' target='_blank' rel="noopener noreferrer">GitHub</a> and/or <a href='https://github.com/jormee' target='_blank' rel="noopener noreferrer">GitLab</a> to view a plethora of uncompleted and bizzare projects and wonderful collections of resources.
              </p>
              <p className="page-description">
                Don't forget to hit the follow button.
              </p>
            </section>
            <section className="portfolio">
              <ul className='project-cards'>
                {
                  projectsData.map(project => <li key={project.name}><ProjectCard project={project}/></li>)
                }
              </ul>
            </section>
          </div>
        </div>
      </Layout>
    )
}

export default Portfolio