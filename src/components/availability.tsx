import React from "react"

import Emoji from "../components/emoji"

type Props = {
  available: boolean
}

const Availability = ({ available }: Props) => {
  if (!available) {
    return (
      <p className="availability">
        I am not accepting new work. <Emoji symbol="🙁" label="frownyFace" />
      </p>
    )
  } else {
    return (
      <p className="availability">
        I am accepting new work. <Emoji symbol="😊" label="happyFace" />
      </p>
    )
  }
}

export default Availability
