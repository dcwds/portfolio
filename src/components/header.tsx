import { Link } from "gatsby"
import React from "react"

import ModeSelector from "./mode-selector"

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
      <Link
        to={item.route}
        {...(item.hasActiveClass ? { activeClassName: "active" } : {})}
      >
        {item.name}
      </Link>
    </li>
  ))

  return (
    <header className="navigation">
      <ul className="nav-items">{items}</ul>
      <ModeSelector />
    </header>
  )
}

export default Header
