import React from "react"

type Props = {
  name: string
  size?: string
} & typeof defaultProps

type Emoji = {
  name: string
  art: string
}

const defaultProps = {
  size: "medium"
}

const Emojis: Emoji[] = [{ name: "wave", art: "🖐️" }]

const Emoji = ({ name, size }: Props) => {
  const emoji = Emojis.find(emo => emo.name === name)

  if (!emoji) {
    throw new Error(`The following emoji is not valid: ${name}`)
  } else {
    return (
      <span role="img" className={`emoji emoji-${size}`}>
        {emoji.art}
      </span>
    )
  }
}

Emoji.defaultProps = defaultProps

export default Emoji
