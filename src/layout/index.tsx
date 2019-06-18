import React, { ReactNode } from "react"

import ModeProvider from "../components/mode-provider"
import LayoutBody from "./body"

type Props = {
  children: ReactNode
}

const Layout = ({ children }: Props) => (
  <ModeProvider>
    <LayoutBody>{children}</LayoutBody>
  </ModeProvider>
)

export default Layout
