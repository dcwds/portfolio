import React, { ReactNode } from "react"
import LayoutChildren from "./children"

import ModeProvider from "../components/mode-provider"

import "normalize.css"
import "../styles/base.scss"

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => (
  <ModeProvider>
    <LayoutChildren>{children}</LayoutChildren>
  </ModeProvider>
)

export default Layout
