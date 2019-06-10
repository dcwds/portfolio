import React from "react"

export type Theme = string

type Themes = {
  dark: Theme
  light: Theme
}

export const themes: Themes = {
  dark: "theme-dark",
  light: "theme-light"
}

export type ThemeContextProps = {
  theme: Theme
  toggleTheme?: () => void
}

export const ThemeContext = React.createContext<ThemeContextProps>({
  theme: themes.dark
})

export default ThemeContext
