import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"
import * as fonts from "../fonts"

const GlobalStyles = createGlobalStyle`
  ${normalize}

  @font-face {
    font-family: "Circular";
    src: url("${fonts.CircularBlackWOFF2}") format("woff2"),
         url("${fonts.CircularBlackWOFF}") format("woff");
    font-display: auto;
    font-style: normal;
    font-weight: 700;
  }

  @font-face {
    font-family: "Circular";
    src: url("${fonts.CircularBoldWOFF2}") format("woff2"),
         url("${fonts.CircularBoldWOFF}") format("woff");
    font-display: auto;
    font-style: normal;
    font-weight: 600;
  }

  @font-face {
    font-family: "Circular";
    src: url("${fonts.CircularMediumWOFF2}") format("woff2"),
         url("${fonts.CircularMediumWOFF}") format("woff");
    font-display: auto;
    font-style: normal;
    font-weight: 500;
  }

  @font-face {
    font-family: "Circular";
    src: url("${fonts.CircularBookWOFF2}") format("woff2"),
         url("${fonts.CircularBookWOFF}") format("woff");
    font-display: auto;
    font-style: normal;
    font-weight: normal;
  }

  body {
    font-family: "Circular", Helvetica, Arial, sans-serif;
  }
`

export default GlobalStyles
