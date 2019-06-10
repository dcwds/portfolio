import React from "react"

type Props = {
  label: string
}

const Button = ({ label }: Props) => <button className="btn">{label}</button>

export default Button
