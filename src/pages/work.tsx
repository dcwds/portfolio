import React from "react"
import Layout from "../components/layout"

import SEO from "../components/seo"

const WorkPage = () => (
  <Layout>
    <SEO title="Work" description="A collection of past work." />

    <main className="content page-work">
      <section className="hero">
        <h1>Work</h1>
      </section>
    </main>
  </Layout>
)

export default WorkPage
