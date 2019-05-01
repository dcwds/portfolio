import React from "react"
import Header from "./header"
import Footer from "./footer"

export default ({ children }) => (
  <div className="main">
    <Header />

    { children }

    <Footer />
  </div>
)
