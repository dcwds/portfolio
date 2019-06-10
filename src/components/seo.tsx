import { graphql, useStaticQuery } from "gatsby"
import React, { useContext } from "react"
import Helmet from "react-helmet"

import ThemeContext from "../contexts/theme-context"
import { ISEOItem } from "../seo-config"

const SEO = ({ title, description, lang = "en" }: ISEOItem) => {
  const data = useStaticQuery(graphql`
    query SEO {
      site {
        siteMetadata {
          defaultTitle: title
          defaultDescription: description
          twitterUsername
        }
      }
    }
  `)

  const seo = {
    description: description || data.site.siteMetadata.defaultDescription,
    title: title || data.site.siteMetadata.defaultTitle
  }

  const { theme } = useContext(ThemeContext)

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      bodyAttributes={{
        class: theme
      }}
      title={seo.title}
      titleTemplate={`%s · ${data.site.siteMetadata.defaultTitle}`}
      meta={[
        {
          charSet: "utf-8"
        },
        {
          content: seo.description,
          name: "description"
        },
        {
          content: seo.title,
          property: "og:title"
        },
        {
          content: seo.description,
          property: "og:description"
        },
        {
          content: "website",
          property: "og:type"
        },
        {
          content: "summary",
          property: "twitter:card"
        },
        {
          content: data.site.siteMetadata.twitterUsername,
          property: "twitter:creator"
        },
        {
          content: seo.description,
          property: "twitter:description"
        }
      ]}
    />
  )
}

export default SEO
