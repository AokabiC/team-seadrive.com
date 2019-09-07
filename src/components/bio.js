import React from "react"
import { StaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import Color from "./const/color"
import { Basea } from "../components/base";

const BioImage = styled(Image)`
    margin-bottom: 0;
    margin-right: 1rem;
    min-width: 50;
    border-radius: 100%;
`;

const BioName = styled(Basea)`
    color: ${Color.primary_dark};
`;

function Bio() {
  return (
    <StaticQuery
      query={bioQuery}
      render={data => {
        const { author, social } = data.site.siteMetadata
        return (
          <div
            style={{
                maxWidth: "80px"
            }}
          >
            <BioImage
              fluid={data.avatar.childImageSharp.fluid}
              alt={author}
              imgStyle={{
                borderRadius: `50%`,
              }}
            />
            <p>
              {` `}
              <BioName href={`https://twitter.com/${social.twitter}`}>
              碧黴(あおかび)
              </BioName>
              <br/>
              Illustrator, Competitive programmer
            </p>
          </div>
        )
      }}
    />
  )
}

const bioQuery = graphql`
  query BioQuery {
    avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
      childImageSharp {
        fluid(maxWidth: 80, maxHeight: 80) {
          ...GatsbyImageSharpFluid
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

export default Bio
