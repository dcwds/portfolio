import React, { Fragment, ReactNode, useContext } from "react"
import Footer from "../components/footer"
import Header from "../components/header"
import GlobalStyles from "../styles/globals"

import ModeContext from "../contexts/mode-context"

type Props = {
  children: ReactNode
}

// REFACTOR:
// This has been abstracted to a body of sorts due to `useContext` looking further
// up the tree for a provider within the `Layout` component, despite being a child
// of the intended provider.

// The only thing interesting happening here is the passing of the current `theme`
// to the `GlobalStyles` component which is what requires this abstraction of an
// additional component for the reasons above.
const LayoutBody = ({ children }: Props) => {
  const { theme } = useContext(ModeContext)

  return (
    <Fragment>
      <GlobalStyles theme={theme} />
      <Header />
      {children}
      <Footer />
    </Fragment>
  )
}

export default LayoutBody
