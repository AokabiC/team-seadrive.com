import React from "react";
import styled, { createGlobalStyle } from "styled-components";
import { useSpring, animated } from "react-spring";
import { TopNavDesktop } from "src_old/organisms/navbar/topnavdesktop";
import { TopNavMobile } from "src_old/organisms/navbar/topnavmobile";
import { LeftNav } from "src_old/organisms/navbar/leftnav";
import Footerbar from "src_old/organisms/footerbar";
import { Hero } from "src_old/organisms/hero";
import useIntersect from "src_old/utils/useintersect";

const Layout: React.FC<any> = ({ title, children }) => {
  const target = React.useRef(null);
  const isIndex = title == "index";
  const isIntersect = useIntersect(
    target,
    { threshold: 0.05 },
    false,
    !isIndex
  );
  const spring = useSpring({ opacity: isIntersect ? 0.1 : 1 });
  const data = useStaticQuery(backgroundQuery);

  return (
    <React.Fragment>
      <GlobalStyle />
      {isIndex && (
        <BackgroundMobile
          fluid={data.backgroundImageMobile.childImageSharp.fluid}
          style={spring}
        />
      )}
      {isIndex && (
        <BackgroundNarrow
          fluid={data.backgroundImageNarrow.childImageSharp.fluid}
          style={spring}
        />
      )}
      {isIndex && (
        <Background
          fluid={data.backgroundImage.childImageSharp.fluid}
          style={spring}
        />
      )}

      <GridWrapper>
        <LeftNav toggle={isIntersect} />
        <TopNavDesktop isVisible={!isIntersect} />
        <TopNavMobile />
        {isIndex && <Hero />}
        <Container marginTop={isIndex} ref={target}>
          <main>
            {title != "index" && <LocationName> {title} </LocationName>}
            {children}
          </main>
        </Container>
        <Footerbar />
      </GridWrapper>
    </React.Fragment>
  );
};

export default Layout;

const GlobalStyle = createGlobalStyle`
  body{
    font-family: a-otf-ud-shin-go-pr6n,sans-serif;
    font-weight: 300;
    font-style: normal;
    line-height: 1.8;
    background-color: whitesmoke;
  }
`;

const Background = styled(animated(Img))`
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  width: 100vw;
  position: fixed !important;
  z-index: -100;

  @media (max-width: 1600px) {
    display: none;
  }
`;

const BackgroundNarrow = styled(Background)`
  display: none;

  @media (max-width: 1600px) {
    display: block;
  }

  @media (max-width: 860px) {
    display: none;
  }
`;

const BackgroundMobile = styled(Background)`
  display: none;

  @media (max-width: 860px) {
    display: block;
  }
`;

const GridWrapper = styled.div`
  display: grid;
  grid-template-columns:
    minmax(120px, 160px)
    minmax(600px, 900px)
    120px;
  grid-template-rows:
    120px
    minmax(calc(100vh - 240px), 1fr)
    120px;
  grid-template-areas:
    "leftnav topnav rightnav"
    "....... content ......."
    "....... footer ........";
  justify-content: space-between;

  @media (max-width: 1600px) {
    /* NarrowDesktop */
    grid-template-columns:
      120px
      minmax(600px, 900px)
      0px;
    grid-column-gap: 30px;
  }

  @media (max-width: 860px) {
    /* mobile */
    display: flex; /* 縦長すぎるとGridが崩壊するので */
    flex-direction: column;
    justify-content: space-between;
  }
`;

const Container = styled.div<{ marginTop: boolean }>`
  grid-area: content;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  padding-left: 15px;
  padding-right: 15px;
  margin-top: ${(props) => (props.marginTop ? "calc(105vh - 120px)" : "0")};

  @media (max-width: 860px) {
    margin-top: 0;
  }
`;

const LocationName = styled.h3`
  text-align: center;
  font-size: 1.5rem;
  letter-spacing: 0.4rem;
  font-family: mortise, sans-serif;
  font-weight: 400;
  font-style: normal;
  margin-bottom: 1.6rem;
`;

const backgroundQuery = graphql`
  query {
    backgroundImage: file(absolutePath: { regex: "/img_bg.jpeg/" }) {
      childImageSharp {
        fluid(
          quality: 100
          maxWidth: 1920
          traceSVG: { color: "#ffdede", threshold: 172 }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    backgroundImageNarrow: file(
      absolutePath: { regex: "/bg_narrowdesktop.jpeg/" }
    ) {
      childImageSharp {
        fluid(
          quality: 100
          maxWidth: 1400
          traceSVG: { color: "#ffdede", threshold: 172 }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
    backgroundImageMobile: file(absolutePath: { regex: "/bg_mobile.jpeg/" }) {
      childImageSharp {
        fluid(
          quality: 100
          maxWidth: 800
          traceSVG: { color: "#ffdede", threshold: 172 }
        ) {
          ...GatsbyImageSharpFluid_withWebp_tracedSVG
        }
      }
    }
  }
`;
