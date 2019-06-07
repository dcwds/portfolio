import { Link } from "gatsby"
import React, { Fragment } from "react"

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
    <Fragment>
      <header className="navigation">
        <ul className="nav-items">{items}</ul>
      </header>
    </Fragment>
  )
}

export default Header
