import React, { useContext } from "react"
import Switch from "react-switch"
import useToggle from "../hooks/use-toggle"
import ModeContext from "../contexts/mode-context"

import styled from "styled-components"
import DarkThemeIcon from "../assets/icon-theme-dark.svg"
import LightThemeIcon from "../assets/icon-theme-light.svg"

const StyledDarkIcon = styled.div`
  position: absolute;
  left: 9px;
  top: 4px;
`
const StyledLightIcon = styled.div`
  position: absolute;
  right: 8px;
  top: 4px;
`

const DarkIcon = () => (
  <StyledDarkIcon>
    <DarkThemeIcon height="16" fill="white" />
  </StyledDarkIcon>
)

const LightIcon = () => (
  <StyledLightIcon>
    <LightThemeIcon height="16" fill="white" />
  </StyledLightIcon>
)

const ModeToggle = () => {
  const { isDark, toggleMode } = useContext(ModeContext)
  const { toggle, handleChange } = useToggle(isDark, toggleMode)

  return (
    <Switch
      arial-label="Toggle light and dark mode."
      onChange={handleChange}
      checked={toggle.checked}
      checkedIcon={<DarkIcon />}
      uncheckedIcon={<LightIcon />}
      onColor="#808aff"
      offColor="#a3a3a3"
    />
  )
}

export default ModeToggle
