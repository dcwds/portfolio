import { useEffect, useState } from "react"

import { Theme } from "styled-components"
import darkTheme from "../themes/theme-dark"
import lightTheme from "../themes/theme-light"

type State = {
  isDark: boolean
  theme: Theme
  hasModeMounted: boolean
}

const isDarkMode = () => {
  const storedMode = localStorage.getItem("dark")

  // Check if a mode is being stored in local storage. If not,
  // set the mode to a default (in this case, dark mode is enabled.)
  if (storedMode === null) {
    // REFACTOR: This is behaving as the default value for the mode.
    // This should be abstracted into a property.
    return true
  } else {
    return JSON.parse(storedMode)
  }
}

const useDarkMode = () => {
  const [mode, setMode] = useState<State>({
    hasModeMounted: false,
    isDark: true,
    theme: darkTheme
  })

  useEffect(() => {
    setMode({
      ...mode,
      hasModeMounted: true,
      isDark: isDarkMode(),
      theme: isDarkMode() ? darkTheme : lightTheme
    })
  }, [])

  return { mode, setMode }
}

export default useDarkMode
