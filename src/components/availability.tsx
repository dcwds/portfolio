import React from "react"
import Emoji from "../components/emoji"

import styled from "styled-components"
import typeSizes from "../styles/typography"

type Props = {
  available: boolean
}

const StyledAvailability = styled.p`
  color: ${({ theme }) => theme.colors.text.normal};
  font-size: ${typeSizes.sm};
  font-weight: normal;
`

const Availability = ({ available }: Props) => {
  if (!available) {
    return (
      <StyledAvailability>
        I am not accepting new work. <Emoji symbol="🙁" label="frownyFace" />
      </StyledAvailability>
    )
  } else {
    return (
      <StyledAvailability>
        I am accepting new work. <Emoji symbol="😊" label="happyFace" />
      </StyledAvailability>
    )
  }
}

export default Availability
