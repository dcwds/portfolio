const customMediaQuery = (minWidth: number) =>
  `@media (min-width: ${minWidth}px)`

const media = {
  custom: customMediaQuery,
  xs: customMediaQuery(480),
  sm: customMediaQuery(768),
  md: customMediaQuery(992),
  lg: customMediaQuery(1200),
  xl: customMediaQuery(1400)
}

export default media
