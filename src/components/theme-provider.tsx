import React, { useContext } from "react"
import ThemeContext from "../contexts/theme-context"

type Props = {
  children: React.ReactChild
}

const ThemeProvider = ({ children }: Props) => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

export default ThemeProvider
