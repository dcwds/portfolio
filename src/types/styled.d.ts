import "styled-components"

declare module "styled-components" {
  export interface Theme {
    colors: {
      background: string
      callout: string
      link: {
        active: string
        hover: string
        normal: string
      }
      text: string
      primary: string
      secondary: string
    }
  }
}
