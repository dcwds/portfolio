import React, { useContext } from "react"
import Switch from "react-switch"
import useToggle from "../hooks/use-toggle"

import ModeContext from "../contexts/mode-context"

const ModeToggle = () => {
  const { toggleMode } = useContext(ModeContext)
  const { toggle, handleChange } = useToggle(toggleMode)

  return <Switch onChange={handleChange} checked={toggle.checked} />
}

export default ModeToggle
