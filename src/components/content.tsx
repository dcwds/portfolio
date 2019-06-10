import React, { ReactChild, useContext } from "react"
import Footer from "./footer"
import Header from "./header"
import Logo from "./logo"

import ThemeContext from "../contexts/theme-context"

type Props = {
  children: ReactChild
}

const Content = ({ children }: Props) => {
  const { theme } = useContext(ThemeContext)

  return (
    <div className={`site-content ${theme}`}>
      <Logo />
      <Header />
      {children}
      <Footer />
    </div>
  )
}

export default Content
