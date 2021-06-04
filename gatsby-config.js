const path = require("path")
module.exports = {
  siteMetadata: {
    title: `Chris Graham - Web Developer`,
    description: `Vancouver, BC based Web Developer. E-Commerce and Static Site Specialist`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-catch-links`,
    `gatsby-plugin-image`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },

    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `pages`,
        path: `${__dirname}/src/pages`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-transformer-remark`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/cg-main.png`, // This path is relative to the root of the site.
      },
    },
    `gatsby-plugin-gatsby-cloud`,
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,

    {
      resolve: `gatsby-plugin-social9-comment`,
      options: {
        content: "971f93d40cfe4c95a4aaa1b8fca68e1d",
        async: true,
        defer: true,
      },
    },
    {
      resolve: "gatsby-plugin-social9-socialshare",
      options: {
        async: true,
        defer: true,
        content: "971f93d40cfe4c95a4aaa1b8fca68e1d",
      },
    },
    {
      resolve: "gatsby-plugin-load-script",
      options: {
        id: "s9-sdk",
        async: true,
        defer: true,
        content: "971f93d40cfe4c95a4aaa1b8fca68e1d",
        src: "//cdn.social9.com/js/socialshare.min.js",
      },
    },
    {
      resolve: `gatsby-plugin-gitalk`,
      options: {
        config: {
          clientID: "44cb6096686dafae905b",
          clientSecret: "366562a1a33db22905262d7b89f2762656a08cc7",
          repo: "portfolio",
          owner: "ChrisGraham427",
          admin: ["ChrisGraham427"],
        },
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: path.join(__dirname, `src`, `images`),
      },
    },
  ],
}
