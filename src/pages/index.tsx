import React from "react"
import Layout from "../layout"
import SEO from "../components/seo"
import { SEOIndexPage } from "../seo-config"
import Availability from "../components/availability"
import Emoji from "../components/emoji"
import MailLink from "../components/mail-link"

import styled from "styled-components"
import typeSizes from "../styles/typography"

const StyledHero = styled.section`
  color: ${({ theme }) => theme.colors.text.callout};
  font-size: ${typeSizes.lg};
  font-weight: 400;
  max-width: 25rem;
`

const IndexPage = () => (
  <Layout>
    <SEO title={SEOIndexPage.title} description={SEOIndexPage.description} />

    <StyledHero>
      <p>
        Hello! Hallo! <Emoji label="wave" symbol="🖐️" />
      </p>
      <p>I'm Dalton.</p>
      <p>I'm a product designer &amp; front-end developer based in Virginia.</p>

      <MailLink address="hello@dcwds.co" />

      <Availability available={true} />
    </StyledHero>
  </Layout>
)

export default IndexPage
