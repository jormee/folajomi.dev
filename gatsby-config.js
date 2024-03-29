require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  siteMetadata: {
    title: `Folajomi`,
    description: `A dive into the world of Folajomi Shotunde, UI/UX Web developer. Creaed with GatsbyJS`,
    author: `Folajomi Shotunde`
  },

  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-github-api`,
      options: {
        token: `${process.env.GATSBY_GITHUB_ACCESS_TOKEN}`,
        variables: {},
        graphQLQuery: `
          query{
            user (login: "jormee"){
              pinnedItems(types: REPOSITORY, first: 10){
                edges{
                  node{
                    ... on Repository {
                      name
                      description
                      url
                      homepageUrl
                      repositoryTopics(first: 5){
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
        `
      }
    },
    {
      resolve: `gatsby-plugin-react-svg`,
      options: {
        rule: {
          include: /icons/
        }
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/utils/typography`,
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#00D7B8`,
        display: `standalone`,
        icon: `src/images/emblem.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
