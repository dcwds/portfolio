import React from "react"
import Layout from "../layout"

import SEO from "../components/seo"
import { SEOAboutPage } from "../seo-config"

const AboutPage = () => (
  <Layout>
    <SEO title={SEOAboutPage.title} description={SEOAboutPage.description} />

    <h1>About</h1>
  </Layout>
)

export default AboutPage
