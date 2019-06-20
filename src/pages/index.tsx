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
  --hero-font-size: 7vw;

  color: ${({ theme }) => theme.colors.text.callout};
  font-size: var(--hero-font-size);
  font-weight: 500;
  max-width: 25rem;

  ${media.sm} {
    --hero-font-size: ${typeSizes.md};
  }
`

const StyledHello = styled.p`
  margin-bottom: 0.3rem;
`
const StyledName = styled.p`
  margin-bottom: 2rem;
`

const StyledBlurb = styled.p`
  margin-bottom: 2rem;
`

const StyledMailLink = styled(MailLink)`
  display: inline-block;
  font-weight: 600;
  margin-bottom: 0.3rem;
`

const IndexPage = () => (
  <Layout>
    <SEO title={SEOIndexPage.title} description={SEOIndexPage.description} />

    <StyledHero>
      <StyledHello>
        Hello! Hallo! <Emoji label="wave" symbol="🖐️" />
      </StyledHello>
      <StyledName>I'm Dalton.</StyledName>
      <StyledBlurb>
        I'm a product designer &amp; front-end developer based in Virginia.
      </StyledBlurb>

      <StyledMailLink address="hello@dcwds.co" />

      <Availability available={true} />
    </StyledHero>
  </Layout>
)

export default IndexPage
