import React, { Fragment, ReactNode } from "react"
import Footer from "../components/footer"
import Header from "../components/header"

import styled from "styled-components"
import media from "../styles/media"
import GlobalStyles from "../styles/globals"
import { containerStyle } from "../styles/extensions"

const StyledContent = styled.main`
  ${containerStyle}

  --margin: 10vh auto;

  margin: var(--margin);

  ${media.sm} {
    --margin: 25vh auto 15vh auto;
  }
`

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => (
  <Fragment>
    <GlobalStyles />
    <Header />
    <StyledContent>{children}</StyledContent>
    <Footer />
  </Fragment>
)

export default Layout
