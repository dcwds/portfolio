module.exports = {
  siteMetadata: {
    title: "Dalton Woods",
    description: "Product designer & front-end developer.",
    twitterUsername: "@daltonwoods"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-typescript",
    "gatsby-plugin-tslint",
    "gatsby-plugin-styled-components",
    {
      resolve: "gatsby-plugin-react-svg",
      options: {
        rule: {
          include: /assets/
        }
      }
    }
  ]
}
