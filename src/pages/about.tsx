import React from "react"
import Layout from "../layout"

import SEO from "../components/seo"
import { SEOAboutPage } from "../seo-config"

const AboutPage = () => (
  <Layout>
    <SEO title={SEOAboutPage.title} description={SEOAboutPage.description} />

    <main className="content">
      <h1>About</h1>
    </main>
  </Layout>
)

export default AboutPage
