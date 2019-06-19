import React from "react"
import useDarkMode from "../hooks/use-dark-mode"
import { ThemeProvider } from "styled-components"
import darkTheme from "../themes/theme-dark"
import lightTheme from "../themes/theme-light"

export type ModeContextProps = {
  isDark: boolean
  toggleMode?: () => void
}

export const ModeContext = React.createContext<ModeContextProps>({
  isDark: true
})

type ModeProviderProps = {
  children: React.ReactChild
}

const ModeProvider = ({ children }: ModeProviderProps) => {
  const { mode, setMode } = useDarkMode()

  const toggleMode = () => {
    const isDark = !mode.isDark

    localStorage.setItem("dark", JSON.stringify(isDark))
    setMode({
      ...mode,
      isDark,
      theme: isDark ? darkTheme : lightTheme
    })
  }

  if (!mode.hasModeMounted) {
    // Do not render until theme is mounted to prevent unwanted
    // visual effects on load.
    return <div />
  }

  // REFACTOR:
  // It's pretty ugly to have styled-components' `ThemeProvider` as a
  // child of the `ModeProvider` but to have the `theme` prop properly passed down
  // to the children, this is required.

  // I'll be looking for a more elegant solution at a later date.
  return (
    <ModeContext.Provider value={{ isDark: mode.isDark, toggleMode }}>
      <ThemeProvider theme={mode.theme}>{children}</ThemeProvider>
    </ModeContext.Provider>
  )
}

export default ModeContext

export { ModeProvider }
