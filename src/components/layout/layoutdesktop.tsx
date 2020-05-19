import React from "react"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"
import Img from "gatsby-image"
import { TopNav } from "@/components/organisms/navbar/topnav"
import { LeftNav } from "@/components/organisms/navbar/leftnav"
import Footerbar from "@/components/organisms/footerbar"

import "ress"
import "typeface-notosans-jp"
import "typeface-zilla-slab"
import useIntersect from "@/utils/useintersect"
import Hero from "@/components/organisms/hero"

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
    120px;
  grid-template-areas:
    "leftnav topnav rightnav"
    "....... content ......."
    "....... footer ........";
  justify-content: space-between;
`

const Container = styled.div<{ isIndex: boolean }>`
  grid-area: content;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding-left: 15px;
  padding-right: 15px;
  margin-top: ${props => (props.isIndex ? "calc(105vh - 120px)" : "0")};
`

const LocationName = styled.h3`
  text-align: center;
  font-weight: 600;
  font-size: 1.5rem;
  letter-spacing: 0.4rem;
  font-family: zilla slab;
  margin-bottom: 1.6rem;
`

export const LayoutDesktop: React.FC<any> = ({ title, image, children }) => {
  const target = React.useRef(null)
  const intersect = useIntersect(target, 0.05, false, title != "index")
  const spring = useSpring({ opacity: intersect ? 0.1 : 1 })
  return (
    <React.Fragment>
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

const GridWrapperNarrow = styled.div`
  display: grid;
  grid-template-rows: 120px minmax(calc(100vh - 240px), 1fr) 120px;
  grid-template-columns:
    120px
    minmax(600px, 1000px)
    0px;
  grid-template-areas:
    "leftnav topnav ..."
    "....... content .."
    "....... footer ...";
  justify-content: space-between;
  grid-column-gap: 30px;
`

export const LayoutDesktopNarrow: React.FC<any> = ({
  title,
  image,
  children,
}) => {
  const target = React.useRef(null)
  const intersect = useIntersect(target, 0.05, false, title != "index")
  const spring = useSpring({ opacity: intersect ? 0.1 : 1 })
  return (
    <React.Fragment>
      {image && <Background fluid={image} style={spring} />}
      <GridWrapperNarrow>
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
      </GridWrapperNarrow>
    </React.Fragment>
  )
}
