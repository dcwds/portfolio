import React from "react"
import styled from "styled-components"
import { containerStyles } from "../styles/helpers"
import media from "../styles/media"

import { Link } from "gatsby"
import Logo from "./logo"
import ModeSelector from "./mode-selector"

const StyledHeader = styled.header`
  ${containerStyles}

  --margin-top: 3rem;

  align-items: center;
  display: flex;
  justify-content: space-between;
  margin-top: var(--margin-top);

  li {
    margin-right: 4vw;
  }

  ${media.sm} {
    --margin-top: 10vh;
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
      <Link to={item.route}>{item.name}</Link>
    </li>
  ))

  return (
    <StyledHeader>
      <Logo />
      <StyledItems>
        <StyledNavItems>{items}</StyledNavItems>
        <ModeSelector />
      </StyledItems>
    </StyledHeader>
  )
}

export default Header
