import React from "react"
import Header from "./header"
import Footer from "./footer"

import "normalize.css"
import "../styles/base.scss"

export default ({ children }) => (
  <div className="main">
    <Header />

    { children }

    <Footer />
  </div>
)
