import "styled-components"

declare module "styled-components" {
  export interface Theme {
    className: string
    colors: {
      background: string
      text: string
      primary: string
      secondary: string
    }
  }
}
