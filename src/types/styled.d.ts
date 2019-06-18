import "styled-components"

declare module "styled-components" {
  export interface Theme {
    colors: {
      background: string
      text: string
      primary: string
      secondary: string
    }
  }
}
