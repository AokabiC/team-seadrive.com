import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"

const SlideImage = styled(Image)`
    min-width: auto;
    margin: 1rem;
    flex-grow: 1;
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
                const { author, social } = data.site.siteMetadata
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
    sl1: file(absolutePath: { regex: "/slideshow/sl1.png/" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    sl2: file(absolutePath: { regex: "/slideshow/sl2.png/" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
          ...GatsbyImageSharpFluid_noBase64
        }
      }
    }
    sl3: file(absolutePath: { regex: "/slideshow/sl3.png/" }) {
      childImageSharp {
        fluid(maxWidth: 800, quality: 100) {
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
