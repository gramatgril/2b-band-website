require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
});

module.exports = {
  siteMetadata: {
    title: `2bband.si`,
    description: `2b je electric-organic duo bratov Gašperja in Primoža`,
    author: `@praecorloth`,
    image: `/2b-bcg5.jpg`,
    siteUrl: `https://2bband.netlify.com`,
    icon: "/favicon.ico",
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
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: process.env.CONTENTFUL_SPACE_ID,
        accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
      },
    },
    {
      resolve: `gatsby-plugin-typography`,
      options: {
        pathToConfigModule: `src/styles/typography`,
      },
    },
      {
        resolve: 'gatsby-plugin-mailchimp',
        options: {
            endpoint: process.env.MAILCHIMP_ENDPOINT,
        },
    },
    // PWA and Offline plugins
    // {
    //   resolve: `gatsby-plugin-manifest`,
    //   options: {
    //     name: `Site name`,
    //     short_name: `Short`,
    //     start_url: `/`,
    //     background_color: `#663399`,
    //     theme_color: `#663399`,
    //     display: `minimal-ui`,
    //   },
    // },
    // {
    //   resolve: `gatsby-plugin-offline`,
    //   options: {},
    // },
  ],
};
