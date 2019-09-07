import React from "react"
import { createGlobalStyle } from "styled-components"

const GlobalStyle = createGlobalStyle`
  body {
    background: #333;
    background: rgba(248, 249, 250, .8);
  }
`
export default (props) => <React.Fragment>
  <GlobalStyle>{props.children}</GlobalStyle>
</React.Fragment>