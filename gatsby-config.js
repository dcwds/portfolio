module.exports = {
  siteMetadata: {
    title: "Dalton Woods",
    description: "Product designer & front-end developer.",
    twitterUsername: "@daltonwoods"
  },
  plugins: [
    "gatsby-plugin-react-helmet",
    "gatsby-plugin-sass",
    "gatsby-plugin-typescript",
    "gatsby-plugin-tslint",
    {
      resolve: "gatsby-plugin-stylelint",
      options: { files: ["./src/**/**/*.{css,scss}"] }
    },
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
