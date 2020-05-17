import React from "react"
import styled, { createGlobalStyle } from "styled-components"
import { useSpring, animated } from "react-spring"
import Img from "gatsby-image"
import { TopNav } from "../components/organisms/topnav"
import { LeftNav } from "../components/organisms/leftnav"
import Footerbar from "./organisms/footerbar"

import "ress"
import "typeface-noto-sans"
import "typeface-noto-serif"
import "typeface-montserrat-alternates"
import useIntersect from "@/utils/useintersect"
import Hero from "./organisms/hero"

const GlobalStyle = createGlobalStyle`
  body{
      font-family: Noto sans;
      background-color: whitesmoke;
  }
`

const Background = styled(animated(Img))`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  position: fixed !important;
  z-index: -100;
`

const GridWrapper = styled.div`
  display: grid;
  grid-template-rows: 120px minmax(calc(100vh - 240px), 1fr) 120px;
  grid-template-columns:
    minmax(120px, 160px)
    minmax(600px, 1000px)
    minmax(120px, 160px);
  grid-template-areas:
    "leftnav topnav rightnav"
    "....... content ......."
    "....... footer ........";
  justify-content: space-between;
`

const Container = styled.div<{ isIndex: boolean }>`
  grid-area: content;
  display: flex;
  flex-flow: column;
  padding-left: 15px;
  padding-right: 15px;
  margin-top: ${props => (props.isIndex ? "calc(105vh - 120px)" : "0")};
`

const LocationName = styled.h3`
  text-align: center;
  letter-spacing: 0.5rem;
`

const Layout: React.FC<any> = ({ title, image, children }) => {
  const target = React.useRef(null)
  const intersect = useIntersect(target, 0.05, false, title != "index")
  const spring = useSpring({ opacity: intersect ? 0.1 : 1 })
  return (
    <React.Fragment>
      <GlobalStyle />
      {image && <Background fluid={image} style={spring} />}
      <GridWrapper>
        <LeftNav toggle={intersect} />
        <TopNav isVisible={!intersect} />
        {title == "index" && <Hero />}
        <Container isIndex={title == "index"} ref={target}>
          <main>
            {title != "index" && <LocationName> {title} </LocationName>}
            {children}
          </main>
        </Container>
        <Footerbar />
      </GridWrapper>
    </React.Fragment>
  )
}

export default Layout
