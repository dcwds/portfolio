import React from "react"
import Header from "./header"
import Footer from "./footer"
import Logo from "./logo"

import "normalize.css"
import "../styles/base.scss"

export default ({ children }) => (
  <div className="site">
    <Logo />
    <Header />

    { children }
    <Footer />
  </div>
)
