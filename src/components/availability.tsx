import React from "react"

import Emoji from "../components/emoji"

type Props = {
  available: boolean
  className?: string
}

const Availability = ({ available, className }: Props) => {
  if (!available) {
    return (
      <p className={`availability ${className}`}>
        I am not accepting new work. <Emoji symbol="🙁" label="frownyFace" />
      </p>
    )
  } else {
    return (
      <p className={`availability ${className}`}>
        I am accepting new work. <Emoji symbol="😊" label="happyFace" />
      </p>
    )
  }
}

export default Availability
