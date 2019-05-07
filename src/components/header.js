import React from "react"
import { Link } from "gatsby"

import Logo from "./logo"

export default () => (
  <>
    <header className="navigation">
      <Logo />
      
      <ul className="nav-items">
        <li>
          <Link
            to="/work"
            activeClassName="active">Work</Link>
        </li>
        <li>
          <Link
            to="/about"
            activeClassName="active">About</Link>
        </li>
        <li>
          <Link
            to="/contact"
            activeClassName="active">Contact</Link>
        </li>
      </ul>
    </header>
  </>
)
