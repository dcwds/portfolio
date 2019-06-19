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

const navLinkStyles = css`
  color: ${({ theme }) => theme.colors.navLink.normal};

  &:active {
    color: ${({ theme }) => theme.colors.navLink.active};
  }

  &:hover {
    color: ${({ theme }) => theme.colors.navLink.hover};
  }
`

export { containerStyles, navLinkStyles }
