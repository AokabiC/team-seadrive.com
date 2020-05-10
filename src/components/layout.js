import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import Navbar from "../components/navbar"
import Footerbar from "../components/footerbar"

import "ress"
import "typeface-noto-sans"
import "typeface-noto-serif"

const GlobalStyle = createGlobalStyle`
  body{
      font-family: Noto sans;
      background-color: whitesmoke;
  }
`

const BaseContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-flow: column;
    max-width: 1000px;
    min-height: 100vh;
    margin: auto;
    padding-top: 4rem;
    padding-left: 15px;
    padding-right: 15px;
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
