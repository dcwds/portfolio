import React from "react"
import { Theme } from "styled-components"
import darkTheme from "../themes/theme-dark"

export type ModeContextProps = {
  isDark: boolean
  theme: Theme
  toggleMode?: () => void
}

export const ModeContext = React.createContext<ModeContextProps>({
  isDark: true,
  theme: darkTheme
})

export default ModeContext
