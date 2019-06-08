import React from "react"

type Props = {
  label: string
  symbol: string
  size?: string
} & typeof defaultProps

const defaultProps = {
  size: "medium"
}

const Emoji = ({ label, symbol, size }: Props) => (
  <span role="img" className={`emoji emoji-${size}`} aria-label={label}>
    {symbol}
  </span>
)

Emoji.defaultProps = defaultProps

export default Emoji
