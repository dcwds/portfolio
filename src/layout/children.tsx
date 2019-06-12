import React, { ReactNode, useContext } from "react"

import ModeContext from "../contexts/mode-context"

import Footer from "../components/footer"
import Header from "../components/header"
import Logo from "../components/logo"

type Props = {
  children: ReactNode
}

// A LayoutChildren component is needed in order for useContext
// to work correctly, given we want its provider to be the one declared
// within `Layout`.

// `computedMode` is added to this component as it's not desirable on the `body`
// element because a flash of the default mode styles occur otherwise.
const LayoutChildren = ({ children }: Props) => {
  const { computedMode } = useContext(ModeContext)

  return (
    <div className={`site-wrapper ${computedMode}`}>
      <div className="site-content">
        <Logo />
        <Header />
        {children}
        <Footer />
      </div>
    </div>
  )
}

export default LayoutChildren
