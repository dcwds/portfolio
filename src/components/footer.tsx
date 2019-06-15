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
    <li key={item.name}>
      <a href={item.link} rel="noopener noreferrer" target="_blank">
        {item.name}
      </a>
    </li>
  ))

  return (
    <footer>
      <p>&copy; {new Date().getFullYear()} Dalton Woods.</p>
      <ul>{elsewhereItems}</ul>
    </footer>
  )
}

export default Footer
