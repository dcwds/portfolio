import React, { ReactChild } from "react"
import Content from "./content"

import ThemeProvider from "./theme-provider"

import "normalize.css"
import "../styles/base.scss"

type Props = {
  children: ReactChild
}

const Layout = ({ children }: Props) => (
  <ThemeProvider>
    <Content>{children}</Content>
  </ThemeProvider>
)

export default Layout
