import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled, { keyframes } from "styled-components"

const fadein = keyframes`
  0% {opacity: 0}
  100% {opacity: 1}
`

const SlideImage = styled(Image)`
    min-width: auto;
    margin: 1rem 0;
    flex-grow: 1;
    animation: ${fadein} .8s linear forwards;
`;


class Slideshow extends React.Component {
    constructor(props) {
        super(props);
        this.state = {slideIdx: Math.floor(Math.random()*3)};
    }

    render() {
        return (
            <StaticQuery
            query={slideshowQuery}
            render={data => {
                const { author } = data.site.siteMetadata
                const sl = [
                    data.sl1.childImageSharp.fluid,
                    data.sl2.childImageSharp.fluid,
                    data.sl3.childImageSharp.fluid
                ]
                return (
                <SlideImage
                    fluid={sl[this.state.slideIdx]}
                    alt={author}
                />
                )
            }}
            />
        )
    }
}


const slideshowQuery = graphql`
  query Slideshow {
    sl1: file(absolutePath: { regex: "/slideshow/sl1.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    sl2: file(absolutePath: { regex: "/slideshow/sl2.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    sl3: file(absolutePath: { regex: "/slideshow/sl3.jpg/" }) {
      childImageSharp {
        fluid(maxWidth: 1200, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    site {
      siteMetadata {
        author
        social {
          twitter
        }
      }
    }
  }
`

export default Slideshow
