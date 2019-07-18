import React from "react"
import { ModeProvider } from "./src/contexts/mode-context"
import Layout from "./src/layout"

export const wrapRootElement = ({ element }) => (
  <ModeProvider>{element}</ModeProvider>
)

export const wrapPageElement = ({ element, props }) => (
  <Layout {...props}>{element}</Layout>
)
