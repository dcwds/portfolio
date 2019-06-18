import React from "react"
import Layout from "../layout"
import styled from "styled-components"

import SEO from "../components/seo"
import { SEOIndexPage } from "../seo-config"

import Availability from "../components/availability"
import Emoji from "../components/emoji"
import MailLink from "../components/mail-link"

const IndexPage = () => (
  <Layout>
    <SEO title={SEOIndexPage.title} description={SEOIndexPage.description} />

    <section>
      <p>
        Hello! Hallo! <Emoji label="wave" symbol="🖐️" />
      </p>
      <p>I'm Dalton.</p>
      <p>I'm a product designer &amp; front-end developer based in Virginia.</p>

      <MailLink address="hello@dcwds.co" />

      <Availability available={true} />
    </section>
  </Layout>
)

export default IndexPage
