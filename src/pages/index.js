import React from "react"
import Layout from "../components/layout"

import SEO from "../components/seo"

export default () => (
  <Layout>
    <SEO
      title="Portfolio"
      description="A selection of my work."
    />

    <main className="content page-home">
      <section class="hero">
        <h1>Hello, I am a product designer &amp; front-end developer currently living in Virginia.</h1>
      </section>
    </main>
  </Layout>
)
