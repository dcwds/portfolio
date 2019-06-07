import { graphql, useStaticQuery } from "gatsby"
import React from "react"
import Helmet from "react-helmet"

type Props = {
  lang?: string
  title: string
  description: string
} & typeof defaultProps

const defaultProps = {
  lang: "en"
}

const SEO = (props: Props) => {
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
    description: props.description || data.defaultDescription,
    title: props.title || data.defaultTitle
  }

  return (
    <Helmet
      htmlAttributes={{
        lang: props.lang
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

SEO.defaultProps = defaultProps

export default SEO
