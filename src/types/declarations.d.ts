declare module "*.scss" {
  const content: { [className: string]: string }
  export = content
}

declare module "*.svg" {
  const content: any
  export default content
}

declare module "*.woff" {
  const content: any
  export default content
}

declare module "*.woff2" {
  const content: any
  export default content
}