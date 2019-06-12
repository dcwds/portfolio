import React, { ReactNode } from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import Logo from "../components/logo"

import ModeProvider from "../components/mode-provider"

import "normalize.css"
import "../styles/base.scss"

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => (
  <ModeProvider>
    <div className="site-content">
      <Logo />
      <Header />
      {children}
      <Footer />
    </div>
  </ModeProvider>
)

export default Layout
