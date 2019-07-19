import React from "react"
import { ModeProvider } from "./src/contexts/mode-context"
import GlobalStyles from "./src/styles/globals"
import Layout from "./src/layout"

export const wrapRootElement = ({ element }) => (
  <ModeProvider>
    <>
      <GlobalStyles />
      {element}
    </>
  </ModeProvider>
)

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)
