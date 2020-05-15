import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import { useSpring, animated } from "react-spring"
import Img from "gatsby-image"
import Navbar from "../components/organisms/navbar"
import Footerbar from "../components/footerbar"

import "ress"
import "typeface-noto-sans"
import "typeface-noto-serif"
import useIntersect from "@/utils/useintersect"
import Hero from "./organisms/hero"

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
  position: fixed !important;
`
const AnimatedBackground = animated(Background)

const BaseContainer = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  justify-content: center;
  flex-flow: column;
  max-width: 1000px;
  min-height: 100vh;
  margin: auto;
  padding-left: 15px;
  padding-right: 15px;
`

const LocationName = styled.h3`
  text-align: center;
  letter-spacing: 0.5rem;
`

const Layout: React.FC<any> = ({ title, image, children }) => {
  const target = React.useRef(null)
  const intersect = useIntersect(target, 0.05, false)
  const spring = useSpring({ opacity: intersect ? 0.1 : 1 })
  return (
    <React.Fragment>
      <GlobalStyle />
      {image && <AnimatedBackground fluid={image} style={spring} />}
      <Navbar toggle={intersect} />
      {title == "index" && <Hero />}
      <BaseContainer ref={target}>
        <main>
          {title != "index" && <LocationName> {title} </LocationName>}
          {children}
        </main>
        <Footerbar />
      </BaseContainer>
    </React.Fragment>
  )
}

export default Layout
