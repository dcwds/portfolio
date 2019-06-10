import React, { ReactChild, useContext } from "react"
import Footer from "./footer"
import Header from "./header"
import Logo from "./logo"

import ThemeContext from "../contexts/theme-context"
import ThemeProvider from "./theme-provider"

import "normalize.css"
import "../styles/base.scss"

type Props = {
  children: ReactChild
}

const Layout = ({ children }: Props) => {
  const { theme } = useContext(ThemeContext)

  return (
    <ThemeProvider>
      <div className={`site ${theme}`}>
        <Logo />
        <Header />
        {children}
        <Footer />
      </div>
    </ThemeProvider>
  )
}

export default Layout
