import React from "react"
import styled from "styled-components"
import media from "../styles/media"
import typeSizes from "../styles/typography"
import { containerStyle, navLinkStyle } from "../styles/extensions"

import { Link } from "gatsby"
import Logo from "./logo"
import ModeToggle from "./mode-toggle"

const StyledHeader = styled.header`
  ${containerStyle}

  --margin-top: 3rem;

  align-items: center;
  display: flex;
  font-size: ${typeSizes.xs};
  justify-content: space-between;
  margin-top: var(--margin-top);

  li {
    margin-right: 4vw;
  }

  ${media.sm} {
    --margin-top: 5vh;
  }
`

const StyledItems = styled.div`
  align-items: center;
  display: flex;
`

const StyledNavItems = styled.ul`
  display: flex;
  flex-wrap: wrap;

  list-style-type: none;
  margin: 0;
  padding: 0;
`

const StyledNavItem = styled(Link)`
  ${navLinkStyle}
`

const NavItems: Array<{
  name: string
  route: string
  hasActiveClass: boolean
}> = [
  { name: "Work", route: "/work", hasActiveClass: true },
  { name: "About", route: "/about", hasActiveClass: true },
  { name: "Contact", route: "/contact", hasActiveClass: true }
]

const Header = () => {
  const items = NavItems.map(item => (
    <li key={item.name}>
      <StyledNavItem to={item.route}>{item.name}</StyledNavItem>
    </li>
  ))

  return (
    <StyledHeader>
      <Logo />
      <StyledItems>
        <StyledNavItems>{items}</StyledNavItems>
        <ModeToggle />
      </StyledItems>
    </StyledHeader>
  )
}

export default Header
