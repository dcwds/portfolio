import React, { useContext } from "react"
import { ModeContext } from "../contexts/mode-context"
import styled from "styled-components"
import DarkThemeIcon from "../assets/icon-theme-dark.svg"
import LightThemeIcon from "../assets/icon-theme-light.svg"

const StyledModeSelector = styled.button`
  svg {
    fill: ${({ theme }) => theme.colors.icon.switchTheme};
  }
`

const ModeSelector = () => {
  const { isDark, toggleMode } = useContext(ModeContext)

  return (
    <StyledModeSelector onClick={toggleMode}>
      {isDark ? <LightThemeIcon width="32" /> : <DarkThemeIcon width="32" />}
    </StyledModeSelector>
  )
}

export default ModeSelector
