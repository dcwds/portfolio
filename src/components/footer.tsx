import React from "react"
import styled from "styled-components"
import media from "../styles/media"
import { containerStyles } from "../styles/helpers"

const StyledFooter = styled.footer`
  ${containerStyles}

  --display: block;
  --margin-bottom: 5vh;

  align-items: center;
  display: var(--display);
  justify-content: space-between;
  margin-bottom: var(--margin-bottom);

  li {
    margin-right: 4vw;

    &:last-of-type {
      margin-right: 0;
    }
  }

  ${media.sm} {
    --display: flex;
    --margin-bottom: 10vh;
  }
`

const StyledNavItems = styled.ul`
  display: flex;
  margin: 0;
  list-style-type: none;
  padding: 0;
`

const ElsewhereItems: Array<{
  name: string
  link: string
}> = [
  { name: "Dribbble", link: "https://dribbble.com/dcwoods" },
  { name: "GitHub", link: "https://github.com/daltonwoods" },
  { name: "Twitter", link: "https://twitter.com/daltonwoods" }
]

const Footer = () => {
  const elsewhereItems = ElsewhereItems.map(item => (
    <li key={item.name}>
      <a href={item.link} rel="noopener noreferrer" target="_blank">
        {item.name}
      </a>
    </li>
  ))

  return (
    <StyledFooter>
      <p>&copy; {new Date().getFullYear()} Dalton Woods.</p>
      <StyledNavItems>{elsewhereItems}</StyledNavItems>
    </StyledFooter>
  )
}

export default Footer
