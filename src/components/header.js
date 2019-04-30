import React from "react"
import { Link } from "gatsby"

export default () => (
  <div className="header">
    <Link to="/">Dalton Woods</Link>

    <ul className="nav-items">
      <li>
        <Link>Portfolio</Link>
      </li>
      <li>
        <Link>About</Link>
      </li>
      <li>
        <Link>Contact</Link>
      </li>
    </ul>
  </div>
)
