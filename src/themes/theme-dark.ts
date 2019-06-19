import { DefaultTheme } from "styled-components"

// Values follow the `hsl` format.
const hues = {
  base: 235
}

const darkTheme: DefaultTheme = {
  colors: {
    background: `hsl(${hues.base}, 9%, 14%)`,
    icon: {
      switchTheme: `hsl(38, 100%, 71%)`
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
      normal: `hsl(${hues.base}, 22%, 65%)`,
      callout: "white"
    },
    primary: "black",
    secondary: "gray"
  }
}

export default darkTheme
