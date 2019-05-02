import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

const SEO = ({ title, description, lang }) => (
  <StaticQuery
    query={ query }
    render={ ({
      site: {
        siteMetadata: {
          defaultTitle,
          titleTemplate,
          defaultDescription,
          twitterUsername
        }
      }
    }) => {
      const seo = {
        title: title || defaultTitle,
        description: description || defaultDescription,
      }

      return (
          <Helmet
            htmlAttributes={{
              lang
            }}
            title={seo.title}
            titleTemplate={ titleTemplate }
            meta={[
              {
                name: "description",
                content: seo.description
              },
              {
                property: "og:title",
                content: title
              },
              {
                property: "og:description",
                content: description
              },
              {
                property: "og:type",
                content: "website"
              },
              {
                property: "twitter:card",
                content: "summary"
              },
              {
                property: "twitter:creator",
                content: twitterUsername
              },
              {
                property: "twitter:description",
                content: description
              }
            ]}
          />
        )
      }
    }
  />
)

export default SEO

SEO.propTypes = {
  lang: PropTypes.string,
  title: PropTypes.string,
  description: PropTypes.string
}

SEO.defaultProps = {
  lang: "en",
  title: null,
  description: null
}

const query = graphql`
  query SEO {
    site {
      siteMetadata {
        defaultTitle: title
        titleTemplate
        defaultDescription: description
        twitterUsername
      }
    }
  }
`
