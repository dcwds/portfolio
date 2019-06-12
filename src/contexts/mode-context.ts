import React from "react"

export type ModeContextProps = {
  dark: boolean
  computedMode?: string
  toggleMode?: () => void
}

export const ModeContext = React.createContext<ModeContextProps>({
  dark: true
})

export default ModeContext
