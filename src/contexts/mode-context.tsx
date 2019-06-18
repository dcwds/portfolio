import React from "react"
import useDarkMode from "../hooks/use-dark-mode"
import { Theme } from "styled-components"
import darkTheme from "../themes/theme-dark"
import lightTheme from "../themes/theme-light"

export type ModeContextProps = {
  isDark: boolean
  theme: Theme
  toggleMode?: () => void
}

export const ModeContext = React.createContext<ModeContextProps>({
  isDark: true,
  theme: darkTheme
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

  return (
    <ModeContext.Provider
      value={{ isDark: mode.isDark, theme: mode.theme, toggleMode }}
    >
      {children}
    </ModeContext.Provider>
  )
}

export default ModeContext

export { ModeProvider }
