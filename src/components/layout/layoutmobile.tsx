import React from "react"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"
import Img from "gatsby-image"
import TopNavMoblie from "@/components/organisms/navbar/mobiletopnav"
import Footerbar from "@/components/organisms/footerbar"
import useIntersect from "@/utils/useintersect"
import Hero from "../organisms/hero"

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
  display: flex;
  flex-direction: column;
  grid-template-rows: 70px 1fr 80px;
  grid-template-columns: 1fr;
  grid-template-areas:
    "topnav"
    "content"
    "footer";
  justify-content: space-between;
`

const Container = styled.div`
  grid-area: content;
  display: flex;
  flex-flow: column;
  padding-left: 15px;
  padding-right: 15px;
  margin-top: 0;
`

const LocationName = styled.h3`
  text-align: center;
  font-weight: 600;
  font-size: 1.5rem;
  letter-spacing: 0.4rem;
  font-family: zilla slab;
  margin-bottom: 1.6rem;
`

const LayoutMoblie: React.FC<any> = ({ title, image, children }) => {
  const target = React.useRef(null)
  const intersect = useIntersect(target, 0.05, false, title != "index")
  const spring = useSpring({ opacity: intersect ? 0.1 : 1 })
  return (
    <React.Fragment>
      {image && <Background fluid={image} style={spring} />}
      <GridWrapper>
        <TopNavMoblie isVisible={!intersect} />
        {title == "index" && <Hero />}

        <Container ref={target}>
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

export default LayoutMoblie
