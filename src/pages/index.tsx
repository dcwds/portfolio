import React from "react"
import Layout from "../layout"

import SEO from "../components/seo"
import { SEOIndexPage } from "../seo-config"

import Availability from "../components/availability"
import Emoji from "../components/emoji"
import MailLink from "../components/mail-link"

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

        <MailLink className="call-to-action" address="hello@dcwds.co" />

        <Availability available={true} />
      </section>
    </main>
  </Layout>
)

export default IndexPage
