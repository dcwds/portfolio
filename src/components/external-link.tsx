import React, { ReactNode } from "react"

type Props = {
  children: ReactNode
  href: string
  rel: string
  target: string
} & typeof defaultProps

const defaultProps = {
  rel: "noopener noreferrer",
  target: "_blank"
}

const ExternalLink = ({ children, ...rest }: Props) => (
  <a {...rest}>{children}</a>
)

ExternalLink.defaultProps = defaultProps

export default ExternalLink
