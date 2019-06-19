import { DefaultTheme } from "styled-components"

const lightTheme: DefaultTheme = {
  colors: {
    background: "white",
    icon: {
      switchTheme: "hsl(261, 100%, 80%)"
    },
    link: {
      active: "black",
      hover: "darkBlue",
      normal: "blue"
    },
    primary: "white",
    secondary: "gray",
    text: {
      normal: "gray",
      callout: "black"
    }
  }
}

export default lightTheme
