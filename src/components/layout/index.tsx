import React from "react"
import { useStaticQuery, graphql } from "gatsby"
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
  const data = useStaticQuery(graphql`
    query {
      backgroundImage: file(absolutePath: { regex: "/img_bg.jpeg/" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1920) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      backgroundImageNarrow: file(
        absolutePath: { regex: "/bg_narrowdesktop.jpeg/" }
      ) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 1400) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
      backgroundImageMobile: file(absolutePath: { regex: "/bg_mobile.jpeg/" }) {
        childImageSharp {
          fluid(quality: 100, maxWidth: 800) {
            ...GatsbyImageSharpFluid_withWebp_noBase64
          }
        }
      }
    }
  `)

  const isMobile = useMediaQuery({
    query: "(max-width: 859px)",
  })
  const isNarrow = useMediaQuery({
    query: "(max-width: 1600px)",
  })
  let Result = LayoutDesktop
  let background = data.backgroundImage.childImageSharp.fluid
  if (isMobile) {
    Result = LayoutMoblie
    background = data.backgroundImageMobile.childImageSharp.fluid
  } else if (isNarrow) {
    Result = LayoutDesktopNarrow
    background = data.backgroundImageNarrow.childImageSharp.fluid
  }
  return (
    <React.Fragment>
      <GlobalStyle />
      <Result image={background} {...props} />
    </React.Fragment>
  )
}

export default Layout
