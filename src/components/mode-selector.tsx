import React, { useContext } from "react"
import ModeContext from "../contexts/mode-context"

import MoonIcon from "../assets/icon-theme-dark.svg"
import SunIcon from "../assets/icon-theme-light.svg"

const ModeSelector = () => {
  const { computedMode, toggleMode } = useContext(ModeContext)

  return (
    <button className={`btn btn-mode btn-${computedMode}`} onClick={toggleMode}>
      {computedMode === "dark-mode" ? (
        <SunIcon className="icon icon-light" />
      ) : (
        <MoonIcon className="icon icon-dark" />
      )}
    </button>
  )
}

export default ModeSelector
