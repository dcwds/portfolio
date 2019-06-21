import React from "react"
import styled from "styled-components"
import media from "../styles/media"
import typeSizes from "../styles/typography"
import { containerStyle, navLinkStyle } from "../styles/extensions"

const StyledFooter = styled.footer`
  ${containerStyle}

  --display: block;
  --margin-bottom: 3rem;

  align-items: center;
  display: var(--display);
  font-size: ${typeSizes.sm};
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
    --margin-bottom: 5vh;
  }
`

const StyledNavItems = styled.ul`
  display: flex;
  margin: 0;
  list-style-type: none;
  padding: 0;
`
const StyledNavItem = styled.a`
  ${navLinkStyle}
`

const Copyright = styled.p`
  margin: 0;
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
      <StyledNavItem href={item.link} rel="noopener noreferrer" target="_blank">
        {item.name}
      </StyledNavItem>
    </li>
  ))

  return (
    <StyledFooter>
      <Copyright>&copy; {new Date().getFullYear()} Dalton Woods.</Copyright>
      <StyledNavItems>{elsewhereItems}</StyledNavItems>
    </StyledFooter>
  )
}

export default Footer
