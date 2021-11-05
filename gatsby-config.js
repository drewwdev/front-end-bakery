module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "front-end-bakery",
  },
  plugins: [
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/assets/`,
      },
    },
    "gatsby-transformer-sharp",
    "gatsby-plugin-image",
    "gatsby-plugin-sharp",
    "gatsby-plugin-postcss",
    `gatsby-plugin-react-helmet`,
  ],
};
