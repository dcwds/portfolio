import media from "./media"
import { css } from "styled-components"

const containerStyles = css`
  --max-width: 90vw;

  margin-left: auto;
  margin-right: auto;
  width: var(--max-width);

  ${media.sm} {
    --max-width: 55vw;
  }
`

export { containerStyles }
