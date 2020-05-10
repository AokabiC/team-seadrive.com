import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import Navbar from "../components/navbar"
import Footerbar from "../components/footerbar"
import { BaseContainer } from "./base"

import "ress"
import "typeface-noto-sans"
import "typeface-noto-serif"
import "prismjs/plugins/line-numbers/prism-line-numbers.css"
import "../utils/style.css"

const GlobalStyle = createGlobalStyle`
  body{
      font-family: Noto sans;
      background-color: whitesmoke;
  }
`

const LocationName = styled.h3`
  text-align: center;
  letter-spacing: 0.5rem;
`

class Layout extends React.Component {
  render() {
    const { title, children } = this.props
    return (
      <React.Fragment>
        <GlobalStyle />
        <BaseContainer>
          <Navbar />
          <main>
            <LocationName> {title} </LocationName>
            {children}
          </main>
          <Footerbar />
        </BaseContainer>
      </React.Fragment>
    )
  }
}

export default Layout
