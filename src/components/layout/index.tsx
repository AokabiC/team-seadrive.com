import React from "react"
import { useMediaQuery } from "react-responsive"
import LayoutMoblie from "./layoutmobile"
import { LayoutDesktop, LayoutDesktopNarrow } from "./layoutdesktop"
import { createGlobalStyle } from "styled-components"

import "ress"
import "typeface-notosans-jp"
import "typeface-zilla-slab"

const GlobalStyle = createGlobalStyle`
  body{
      font-family: "Noto Sans JP";
      background-color: whitesmoke;
  }
`

const Layout: React.FC<any> = props => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  })
  const isNarrow = useMediaQuery({
    query: "(max-width: 1600px)",
  })
  let Result = LayoutDesktop
  if (isMobile) Result = LayoutMoblie
  else if (isNarrow) Result = LayoutDesktopNarrow
  return (
    <React.Fragment>
      <GlobalStyle />
      <Result {...props} />
    </React.Fragment>
  )
}

export default Layout
