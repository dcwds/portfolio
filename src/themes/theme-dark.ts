import { DefaultTheme } from "styled-components"

const darkTheme: DefaultTheme = {
  colors: {
    background: "hsl(227, 22%, 17%)",
    // callout: "hsl(35, 100%, 73%)",
    link: {
      active: "white",
      hover: "hsl(261, 100%, 100%%)",
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
