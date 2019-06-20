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

  --display: block;
  --item-gap: 10vw;
  --margin-top: 1.5rem;

  align-items: center;
  display: var(--display);
  font-size: ${typeSizes.xs};
  justify-content: space-between;
  margin-top: var(--margin-top);

  li {
    margin-right: var(--item-gap);
  }

  ${media.sm} {
    --display: flex;
    --item-gap: 4vw;
    --margin-top: 5vh;
  }
`

const StyledLogo = styled(Logo)`
  --margin-bottom: 0.667rem;

  display: inline-block;
  margin-bottom: var(--margin-bottom);

  ${media.sm} {
    --margin-bottom: 0;
  }
`

const StyledItems = styled.div`
  align-items: center;
  display: flex;
  justify-content: space-between;
`

const StyledNavItems = styled.ul`
  display: flex;

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
      <StyledLogo />
      <StyledItems>
        <StyledNavItems>{items}</StyledNavItems>
        <ModeToggle />
      </StyledItems>
    </StyledHeader>
  )
}

export default Header
