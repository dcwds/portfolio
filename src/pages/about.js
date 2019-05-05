import React from "react"
import Layout from "../components/layout"

import SEO from "../components/seo"

export default () => (
  <Layout>
    <SEO
      title="About"
      description="A few remarks about me."
    />

    <main className="content page-about">
      <h1>About</h1>
    </main>
  </Layout>
)
