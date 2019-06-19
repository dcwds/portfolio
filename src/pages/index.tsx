import React from "react"
import Layout from "../layout"
import SEO from "../components/seo"
import { SEOIndexPage } from "../seo-config"
import Availability from "../components/availability"
import Emoji from "../components/emoji"
import MailLink from "../components/mail-link"

import styled from "styled-components"
import media from "../styles/media"
import typeSizes from "../styles/typography"

const StyledHero = styled.section`
  --hero-font-size: 8vw;

  color: ${({ theme }) => theme.colors.text.callout};
  font-size: var(--hero-font-size);
  font-weight: 500;
  max-width: 25rem;

  ${media.sm} {
    --hero-font-size: ${typeSizes.lg};
  }
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
