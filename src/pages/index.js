import React from "react"
import Layout from "../components/layout"

import SEO from "../components/seo"

export default () => (
  <Layout>
    <SEO
      title="Dalton Woods"
      description="Product designer &amp; front-end developer."
    />

    <main className="content page-home">
      <section className="hero">
        <p>My name is Dalton. I'm a product designer &amp; front-end developer based in Virginia.</p>
        <p>I've helped companies keep a happy audience with easy to use products.</p>

        <a
          className="call-to-action"
          href="mailto:hello@dcwds.co"
          rel="noopener noreferrer">hello@dcwds.co</a>
      </section>
    </main>
  </Layout>
)
