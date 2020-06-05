import React from "react"
import styled from "styled-components"

import { graphql, useStaticQuery } from "gatsby"
import Anchor from "../atoms/anchor"

const TagList: React.FC<any> = () => {
  const data = useStaticQuery(TagQuery)
  const tags = data.allMarkdownRemark.group
  return (
    <Container>
      {tags.map((tag: any) => (
        <li key={tag.fieldValue}>
          <Anchor.In to={`/tags/${tag.fieldValue}`}>
            {`#${tag.fieldValue}`}
          </Anchor.In>
        </li>
      ))}
    </Container>
  )
}

const Container = styled.ul`
  list-style-type: none;
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 1rem;
  li {
    margin-right: 1rem;
  }
`

export default TagList

const TagQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(limit: 2000) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
    }
  }
`
