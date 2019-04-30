import React from "react"
import { Helmet } from "react-helmet"
import PropTypes from "prop-types"
import { StaticQuery, graphql } from "gatsby"

const SEO = ({ title, description }) => (
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
        <>
          <Helmet
            title={seo.title}
            titleTemplate={ titleTemplate }>
            <meta name="description" content={ seo.description } />

            { seo.title && <meta property="og:title" content={ seo.title } /> }
            { seo.description && (
              <meta property="og:description" content={ seo.description } />
            ) }
            <meta name="twitter:card" content="summary_large_image" />
            { twitterUsername && (
              <meta name="twitter:creator" content={ twitterUsername } />
            ) }
          </Helmet>
        </>
      )
    }
  }
  />
)

export default SEO

SEO.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string
}

SEO.defaultProps = {
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
