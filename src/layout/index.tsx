import React, { Fragment, ReactNode, useContext } from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import GlobalStyles from "../styles/globals"

import ModeContext from "../contexts/mode-context"

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => {
  const { theme } = useContext(ModeContext)

  return (
    <Fragment>
      <GlobalStyles theme={theme} />
      <Header />
      <main>{children}</main>
      <Footer />
    </Fragment>
  )
}

export default Layout
