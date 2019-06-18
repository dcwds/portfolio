import React from "react"

import useDarkMode from "../hooks/use-dark-mode"
import { ModeContext } from "../contexts/mode-context"

import darkTheme from "../themes/theme-dark"
import lightTheme from "../themes/theme-light"

type Props = {
  children: React.ReactChild
}

const ModeProvider = ({ children }: Props) => {
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

export default ModeProvider
