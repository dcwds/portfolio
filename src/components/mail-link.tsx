import React, { ReactChild } from "react"

type Props = {
  children?: ReactChild
  className?: string

  address: string
  subject?: string
  body?: string
} & typeof defaultProps

const defaultProps = {
  address: "iam@dcwds.co",
  body: "Let's work together on...",
  subject: "👋 Hello, I have a work inquiry."
}

const MailLink = ({ children, className, address, subject, body }: Props) => (
  <a
    className={className}
    href={`mailto:${address}?subject=${subject}&body=${body}`}
    rel="noopener noreferrer"
    target="_blank"
  >
    {children ? children : address}
  </a>
)

MailLink.defaultProps = defaultProps

export default MailLink
