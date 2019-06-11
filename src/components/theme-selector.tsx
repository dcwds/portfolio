import React, { useContext } from "react"
import ThemeContext from "../contexts/theme-context"

import MoonIcon from "../assets/moon.inline.svg"

const ThemeSelector = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <button className={`btn btn-theme btn-${theme}`} onClick={toggleTheme}>
      <MoonIcon className="icon-dark" height="35" />
    </button>
  )
}

export default ThemeSelector
