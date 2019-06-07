import React, { Fragment } from "react"

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
    <li key={item.name} className={item.name.toLowerCase()}>
      <a href={item.link} rel="noopener noreferrer" target="_blank">
        {item.name}
      </a>
    </li>
  ))

  return (
    <Fragment>
      <footer className="navigation">
        <section className="note">
          <h3>Dalton Woods</h3>

          <p>Product designer &amp; front-end developer.</p>
        </section>

        <section className="elsewhere-list">
          <h3>Elsewhere.</h3>

          <ul className="nav-items">{elsewhereItems}</ul>
        </section>

        <section className="copyright">
          <small>&copy; Copyright 2019</small>
        </section>
      </footer>
    </Fragment>
  )
}

export default Footer
