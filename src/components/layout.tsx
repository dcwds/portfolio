import React, { ReactChild } from "react"
import Footer from "./footer"
import Header from "./header"
import Logo from "./logo"

import ThemeProvider from "./theme-provider"

import "normalize.css"
import "../styles/base.scss"

type Props = {
  children: ReactChild
}

const Layout = ({ children }: Props) => (
  <ThemeProvider>
    <div className="site-content">
      <Logo />
      <Header />
      {children}
      <Footer />
    </div>
  </ThemeProvider>
)

export default Layout
