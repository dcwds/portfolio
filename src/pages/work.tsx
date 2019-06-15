import React from "react"
import Layout from "../layout"

import SEO from "../components/seo"
import { SEOWorkPage } from "../seo-config"

const WorkPage = () => (
  <Layout>
    <SEO title={SEOWorkPage.title} description={SEOWorkPage.description} />

    <main className="content">
      <section className="hero">
        <h1>Work</h1>
      </section>
    </main>
  </Layout>
)

export default WorkPage
