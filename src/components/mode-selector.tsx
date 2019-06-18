import React, { useContext } from "react"
import { ModeContext } from "../contexts/mode-context"
import MoonIcon from "../assets/icon-theme-dark.svg"
import SunIcon from "../assets/icon-theme-light.svg"

const ModeSelector = () => {
  const { theme, toggleMode } = useContext(ModeContext)

  return (
    <button className={`btn btn-mode`} onClick={toggleMode}>
      Toggle Theme
    </button>
  )
}

export default ModeSelector
