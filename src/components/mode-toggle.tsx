import React, { useContext } from "react"
import Switch from "react-switch"
import useToggle from "../hooks/use-toggle"
import ModeContext from "../contexts/mode-context"

import styled, { css } from "styled-components"
import DarkIcon from "../assets/icon-theme-dark.svg"
import LightIcon from "../assets/icon-theme-light.svg"

const iconStyle = css`
  fill: white;
`

const StyledDarkIcon = styled(DarkIcon)`
  ${iconStyle}
  height: 18px;
  margin: 5px 0 0 7px;
`
const StyledLightIcon = styled(LightIcon)`
  ${iconStyle}
  height: 20px;
  margin: 4px 0 0 3px;
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
      offColor="#8588ad"
    />
  )
}

export default ModeToggle
