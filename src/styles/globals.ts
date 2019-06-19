import { createGlobalStyle } from "styled-components"
import { normalize } from "styled-normalize"
import * as fonts from "../fonts"
import media from "./media"

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

  *,
  ::after,
  ::before {
    box-sizing: border-box;
  }

  a {
    color: ${({ theme }) => theme.colors.link.normal};
    font-weight: 500;
    text-decoration: none;

    transition: color 0.2s;

    &:active {
      color: ${({ theme }) => theme.colors.link.active};
    }

    &:hover {
      color: ${({ theme }) => theme.colors.link.hover};
    }
  }

  html {
    --font-size: 130%;

    font-family: "Circular", Helvetica, Arial, sans-serif;
    font-feature-settings: "calt", "liga", "clig", "kern";
    font-size: var(--font-size);
    line-height: 1.4;

    ${media.sm} {
      --font-size: 145%;
    }
  }

  body {
    background: ${({ theme }) => theme.colors.background};
    color: ${({ theme }) => theme.colors.text.normal};
  }

  p {
    margin: 0 0 1rem;
  }

  button {
    background: none;
    border: none;
    cursor: pointer;
    outline: none;
  }
`

export default GlobalStyles
