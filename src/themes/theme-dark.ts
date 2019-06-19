import { DefaultTheme } from "styled-components"

const darkTheme: DefaultTheme = {
  colors: {
    background: "hsl(227, 22%, 20%)",
    icon: {
      switchTheme: "hsl(38, 100%, 71%)"
    },
    link: {
      active: "white",
      hover: "hsl(221, 100%, 95%)",
      normal: "hsl(221, 100%, 75%)"
    },
    navLink: {
      active: "white",
      hover: "hsl(261, 100%, 90%)",
      normal: "hsl(261, 100%, 80%)"
    },
    text: {
      normal: "hsl(230, 32%, 65%)",
      callout: "white"
    },
    primary: "black",
    secondary: "gray"
  }
}

export default darkTheme
