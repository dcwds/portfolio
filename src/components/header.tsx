import { Link } from "gatsby"
import React, { Fragment } from "react"

const Header = () => (
  <Fragment>
    <header className="navigation">
      <ul className="nav-items">
        <li>
          <Link to="/work" activeClassName="active">
            Work
          </Link>
        </li>
        <li>
          <Link to="/about" activeClassName="active">
            About
          </Link>
        </li>
        <li>
          <Link to="/contact" activeClassName="active">
            Contact
          </Link>
        </li>
      </ul>
    </header>
  </Fragment>
)

export default Header
