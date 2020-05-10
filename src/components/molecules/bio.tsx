import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Image from "gatsby-image"
import styled from "styled-components"
import Color from "../const/color"
import { Basea } from "../base"

const Bio: React.FC = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.png/" }) {
        childImageSharp {
          fixed(width: 80, height: 80) {
            ...GatsbyImageSharpFixed
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
  `)
  const { author, social } = data.site.siteMetadata

  return (
    <Base>
      <BioImage fixed={data.avatar.childImageSharp.fixed} alt={author} />
      <BioText>
        <BioName href={`https://twitter.com/${social.twitter}`}>
          碧黴(あおかび)
        </BioName>
        <br />
        Illustrator, Competitive programmer
      </BioText>
    </Base>
  )
}

const Base = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 2rem;
`

const BioImage = styled(Image)`
  margin-bottom: 0;
  margin-right: 1rem;
  max-width: 80px;
  border-radius: 50%;
  flex-grow: 1;
`

const BioName = styled(Basea)`
  color: ${Color.primary_dark};
`

const BioText = styled.div``

export default Bio
