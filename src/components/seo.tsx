import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Helmet from "react-helmet"

import { ISEOItem } from "../seo-config"

const SEO = ({ title, description, lang = "en" }: ISEOItem) => {
  const data = useStaticQuery(graphql`
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
  `)

  const seo = {
    description: description || data.defaultDescription,
    title: title || data.defaultTitle
  }

  return (
    <Helmet
      htmlAttributes={{
        lang
      }}
      title={seo.title}
      titleTemplate={data.titleTemplate}
      meta={[
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
          content: data.twitterUsername,
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
