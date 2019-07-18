import React from "react"

import ExternalLink from "../components/external-link"
import SEO from "../components/seo"
import { SEOAboutPage } from "../seo-config"

const AboutPage = () => (
  <>
    <SEO title={SEOAboutPage.title} description={SEOAboutPage.description} />

    <h1>About</h1>

    <section>
      <h2>Colophon</h2>
      <p>
        This site is hosted and deployed through{" "}
        <ExternalLink href="https://www.netlify.com/">Netlify</ExternalLink> and
        statically built with{" "}
        <ExternalLink href="https://www.gatsbyjs.org/">Gatsby</ExternalLink>.
      </p>
    </section>
  </>
)

export default AboutPage
