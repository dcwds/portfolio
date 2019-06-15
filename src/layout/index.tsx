import React, { Fragment, ReactNode } from "react"
import Footer from "../components/footer"
import Header from "../components/header"

import ModeProvider from "../components/mode-provider"
import GlobalStyles from "../styles/globals"

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => (
  <ModeProvider>
    <Fragment>
      <GlobalStyles />
      <Header />
      {children}
      <Footer />
    </Fragment>
  </ModeProvider>
)

export default Layout
