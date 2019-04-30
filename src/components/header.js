import React from "react"
import { Link } from "gatsby"

export default () => (
  <div className="header">
    <Link to="/">Dalton Woods</Link>

    <ul className="nav-items">
      <li>
        <Link
          to="/"
          activeClassName="active">Portfolio</Link>
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
  </div>
)
