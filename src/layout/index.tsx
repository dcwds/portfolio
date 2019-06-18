import React, { Fragment, ReactNode, useContext } from "react"
import Footer from "../components/footer"
import Header from "../components/header"

import ModeContext from "../contexts/mode-context"

import styled from "styled-components"
import media from "../styles/media"
import GlobalStyles from "../styles/globals"
import { containerStyles } from "../styles/helpers"

const StyledContent = styled.main`
  ${containerStyles}

  --margin: 10vh auto;

  margin: var(--margin);

  ${media.sm} {
    --margin: 20vh auto;
  }
`

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  const { theme } = useContext(ModeContext)

  return (
    <Fragment>
      <GlobalStyles theme={theme} />
      <Header />
      <StyledContent>{children}</StyledContent>
      <Footer />
    </Fragment>
  )
}

export default Layout
