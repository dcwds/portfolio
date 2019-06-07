import React, { ReactNode } from "react"
import Footer from "./footer"
import Header from "./header"
import Logo from "./logo"

import "normalize.css"
import "../styles/base.scss"

type Props = {
  children: ReactNode
}

const Layout = (props: Props) => (
  <div className="site">
    <Logo />
    <Header />
    {props.children}
    <Footer />
  </div>
)

export default Layout
