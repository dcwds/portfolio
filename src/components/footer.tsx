import React from "react"

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
    <footer className="navigation">
      <p className="copyright">
        &copy; {new Date().getFullYear()} Dalton Woods.
      </p>
      <ul className="nav-items">{elsewhereItems}</ul>
    </footer>
  )
}

export default Footer
