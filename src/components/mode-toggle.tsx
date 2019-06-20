import React, { useContext } from "react"
import Switch from "react-switch"
import useToggle from "../hooks/use-toggle"
import ModeContext from "../contexts/mode-context"

import styled, { css } from "styled-components"
import DarkIcon from "../assets/icon-theme-dark.svg"
import LightIcon from "../assets/icon-theme-light.svg"

const iconStyle = css`
  fill: white;
  height: 18px;
`

const StyledDarkIcon = styled(DarkIcon)`
  ${iconStyle}
  margin: 5px 0 0 7px;
`
const StyledLightIcon = styled(LightIcon)`
  ${iconStyle}
  margin: 4px 0 0 5px;
`

const ModeToggle = () => {
  const { isDark, toggleMode } = useContext(ModeContext)
  const { toggle, handleChange } = useToggle(isDark, toggleMode)

  return (
    <Switch
      arial-label="Toggle light and dark mode."
      onChange={handleChange}
      checked={toggle.checked}
      checkedIcon={<StyledDarkIcon />}
      uncheckedIcon={<StyledLightIcon />}
      onColor="#808aff"
      offColor="#a3a3a3"
    />
  )
}

export default ModeToggle
