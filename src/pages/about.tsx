import React from "react"
import Layout from "../components/layout"

import SEO from "../components/seo"
import { SEOAboutPage } from "../seo-config"

const AboutPage = () => (
  <Layout>
    <SEO title={SEOAboutPage.title} description={SEOAboutPage.description} />

    <main className="content page-about">
      <h1>About</h1>
    </main>
  </Layout>
)

export default AboutPage
