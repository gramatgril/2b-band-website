require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `Gatsby Starter`,
    description: `Gatsby starter template`,
    author: `@praecorloth`,
    image: `/image.jpg`,
    siteUrl: `https://www.google.com`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/styles/typography`,
      },
    },
    // PWA and Offline plugins
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Site name`,
        short_name: `Short`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
      },
    },
    {
      resolve: `gatsby-plugin-offline`,
      options: {
        // precachePages: [`/about-us/`, `/projects/*`],
      },
    },
  ],
};
