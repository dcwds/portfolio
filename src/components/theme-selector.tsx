import React from "react"
import ThemeContext from "../contexts/theme-context"

const ThemeSelector = () => (
  <ThemeContext.Consumer>
    {({ toggleTheme }) => <button onClick={toggleTheme}>Toggle Theme</button>}
  </ThemeContext.Consumer>
)

export default ThemeSelector
