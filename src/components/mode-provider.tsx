import React from "react"
import ModeContext from "../contexts/mode-context"

import useDarkMode from "../hooks/use-dark-mode"

type Props = {
  children: React.ReactChild
}

const ModeProvider = ({ children }: Props) => {
  const { mode, setMode } = useDarkMode()

  const computedMode = mode.dark ? "dark-mode" : "light-mode"

  const toggleMode = () => {
    const dark = !mode.dark

    localStorage.setItem("dark", JSON.stringify(dark))
    setMode({ ...mode, dark })
  }

  if (!mode.hasModeMounted) {
    // Do not render until theme is mounted to prevent unwanted
    // visual effects on load.
    return <div />
  }

  return (
    <ModeContext.Provider value={{ dark: mode.dark, computedMode, toggleMode }}>
      {children}
    </ModeContext.Provider>
  )
}

export default ModeProvider
