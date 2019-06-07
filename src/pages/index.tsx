import React from "react"
import Layout from "../components/layout"

import SEO from "../components/seo"
import { SEOIndexPage } from "../seo-config"

const IndexPage = () => (
  <Layout>
    <SEO title={SEOIndexPage.title} description={SEOIndexPage.description} />

    <main className="content page-home">
      <section className="hero">
        <p>
          My name is Dalton. I'm a product designer &amp; front-end developer
          based in Virginia.
        </p>
        <p>
          I've helped companies keep a happy audience with easy-to-use products.
        </p>

        <a
          className="call-to-action"
          href="mailto:hello@dcwds.co"
          rel="noopener noreferrer"
        >
          hello@dcwds.co
        </a>
      </section>
    </main>
  </Layout>
)

export default IndexPage
