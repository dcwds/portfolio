import React from "react"
import { ModeProvider } from "./src/contexts/mode-context"

export const wrapRootElement = ({ element }) => (
  <ModeProvider>{element}</ModeProvider>
)
