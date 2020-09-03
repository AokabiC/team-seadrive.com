import React from "react"
import styled from "styled-components"

import { graphql, useStaticQuery, navigate } from "gatsby"
import color from "@/utils/color"

const Tag = styled.div<{ toggle: boolean }>`
  border-radius: 0.2rem;
  padding: 0 0.2rem;
  background: ${props =>
    props.toggle ? "rgba(0,0,200,0.2)" : "rgba(0,0,0,0)"};
  color: ${color.primary_dark};
`

const TagList: React.FC<any> = ({ selectedTags }) => {
  const data = useStaticQuery(TagQuery)
  const tags = data.allMarkdownRemark.group

  return (
    <Container>
      {tags.map((tag: any) => (
        <li key={tag.fieldValue}>
          <Tag
            toggle={selectedTags.includes(tag.fieldValue)}
            onClick={() => {
              const nextSelectedTags = selectedTags.filter(
                selectedTag => selectedTag != tag.fieldValue
              )
              if (!selectedTags.includes(tag.fieldValue))
                nextSelectedTags.push(tag.fieldValue)
              const url =
                "/blog/" +
                (nextSelectedTags.length > 0
                  ? `?q=${nextSelectedTags.join("+")}`
                  : "")
              navigate(url)
            }}
          >
            {`#${tag.fieldValue}`}
          </Tag>
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
    margin-right: 0.5rem;
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
