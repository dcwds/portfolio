import { Link } from "gatsby"
import React from "react"

type Props = {
  className?: string
}

const Logo = ({ className }: Props) => (
  <Link to="/" className={className}>
    Dalton Woods
  </Link>
)

export default Logo
