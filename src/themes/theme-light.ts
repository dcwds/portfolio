import { DefaultTheme } from "styled-components"

// Values follow the `hsl` format.
const hues = {
  base: 235
}

const lightTheme: DefaultTheme = {
  colors: {
    background: "white",
    icon: {
      switchTheme: "hsl(261, 100%, 80%)"
    },
    link: {
      active: "white",
      hover: `hsl(${hues.base}, 100%, 95%)`,
      normal: `hsl(${hues.base}, 100%, 75%)`
    },
    navLink: {
      active: "white",
      hover: `hsl(${hues.base}, 50%, 80%)`,
      normal: `hsl(${hues.base}, 20%, 60%)`
    },
    text: {
      normal: `hsl(${hues.base}, 22%, 45%)`,
      callout: `hsl(${hues.base}, 22%, 25%)`
    },
    primary: "black",
    secondary: "gray"
  }
}

export default lightTheme
