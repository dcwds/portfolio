import React from "react"
import Layout from "../components/layout"

import SEO from "../components/seo"
import { SEOIndexPage } from "../seo-config"

import Availability from "../components/availability"
import Emoji from "../components/emoji"

const IndexPage = () => (
  <Layout>
    <SEO title={SEOIndexPage.title} description={SEOIndexPage.description} />

    <main className="content page-home">
      <section className="hero">
        <p className="line-hello">
          Hello! Hallo! <Emoji label="wave" symbol="🖐️" />
        </p>
        <p className="line-name">I'm Dalton.</p>
        <p className="line-about">
          I'm a product designer &amp; front-end developer based in Virginia.
        </p>

        <a
          className="call-to-action"
          href="mailto:hello@dcwds.co"
          rel="noopener noreferrer"
        >
          hello@dcwds.co
        </a>

        <Availability available={true} />
      </section>
    </main>
  </Layout>
)

export default IndexPage
