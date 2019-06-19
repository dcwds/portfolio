import "styled-components"
import { DefaultTheme } from "styled-components"
import Theme from "../themes"

declare module "styled-components" {
  interface DefaultTheme extends Theme {}
}
