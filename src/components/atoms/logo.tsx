import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Image from "gatsby-image"
import Anchor from "@/components/atoms/anchor"

const LogoImage = () => {
  const data = useStaticQuery(LogoQuery)
  return (
    <Anchor.In to="/">
      <Image
        fixed={data.logo.childImageSharp.fixed}
        style={{
          marginRight: 0,
          marginBottom: 0,
        }}
        imgStyle={{
          borderRadius: `50%`,
        }}
        fadeIn={true}
      />
    </Anchor.In>
  )
}

const LogoQuery = graphql`
  query LogoQuery {
    logo: file(absolutePath: { regex: "/Team_SeAdrive_logo.png/" }) {
      childImageSharp {
        fixed(width: 50, height: 50) {
          ...GatsbyImageSharpFixed_noBase64
        }
      }
    }
  }
`

export default LogoImage
