import React, { useContext } from "react"
import ThemeContext from "../contexts/theme-context"

import MoonIcon from "../assets/icon-theme-dark.svg"
import SunIcon from "../assets/icon-theme-light.svg"

const ThemeSelector = () => {
  const { theme, toggleTheme } = useContext(ThemeContext)

  return (
    <button className={`btn btn-theme btn-${theme}`} onClick={toggleTheme}>
      {theme === "theme-light" && <MoonIcon className="icon icon-dark" />}

      {theme === "theme-dark" && <SunIcon className="icon icon-light" />}
    </button>
  )
}

export default ThemeSelector
