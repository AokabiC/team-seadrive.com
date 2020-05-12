import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import Img from "gatsby-image"
import Navbar from "../components/navbar"
import Footerbar from "../components/footerbar"

import "ress"
import "typeface-noto-sans"
import "typeface-noto-serif"
import useIntersect from "@/utils/useintersect"

const GlobalStyle = createGlobalStyle`
  body{
      font-family: Noto sans;
      background-color: whitesmoke;
  }
`

const Background = styled(Img)`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  /* min-height: 100vh; */
`

const BaseContainer = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  flex-flow: column;
  max-width: 1000px;
  min-height: 100vh;
  margin: auto;
  padding-top: 100vh;
  padding-left: 15px;
  padding-right: 15px;
`

const LocationName = styled.h3`
  text-align: center;
  letter-spacing: 0.5rem;
`

const Layout: React.FC<any> = ({ title, image, children }) => {
  const target = React.useRef(null)
  const topscroll = useIntersect(target)
  return (
    <React.Fragment>
      <GlobalStyle />
      {!topscroll && <Background fluid={image} style={{ position: `fixed` }} />}
      <p>{topscroll ? "Yes" : "No"}</p>
      <BaseContainer>
        <Navbar />
        <main>
          <LocationName ref={target}> {title} </LocationName>
          {children}
        </main>
        <Footerbar />
      </BaseContainer>
    </React.Fragment>
  )
}

export default Layout
