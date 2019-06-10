import React, { useEffect, useState } from "react"
import ThemeContext, { Theme, themes } from "../contexts/theme-context"

type State = {
  theme: Theme
}

type Props = {
  children: React.ReactChild
}

const ThemeProvider = ({ children }: Props) => {
  const [theme, setTheme] = useState<State>({
    theme: localStorage.getItem("theme") || themes.dark
  })

  const toggleTheme = () => {
    setTheme(prevTheme => ({
      ...prevTheme,
      theme: prevTheme.theme === themes.dark ? themes.light : themes.dark
    }))
  }

  useEffect(() => {
    localStorage.setItem("theme", theme.theme)
  }, [theme])

  return (
    <ThemeContext.Provider value={{ ...theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
