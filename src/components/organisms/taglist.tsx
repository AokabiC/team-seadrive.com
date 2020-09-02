import React, { useState, useEffect } from "react"
import styled from "styled-components"

import { graphql, useStaticQuery } from "gatsby"
import Anchor from "../atoms/anchor"
import color from "@/utils/color"

const Tag = styled(Anchor.In)<{ toggle: boolean }>`
  border-radius: 0.2rem;
  padding: 0 0.2rem;
  background: ${props =>
    props.toggle ? "rgba(0,0,200,0.2)" : "rgba(0,0,0,0)"};
  color: ${color.primary_dark};
`

const TagList: React.FC<any> = () => {
  const data = useStaticQuery(TagQuery)
  const tags = data.allMarkdownRemark.group
  const [toggle, setToggle] = useState(new Map<string, boolean>())

  return (
    <Container>
      {tags.map((tag: any) => (
        <li key={tag.fieldValue}>
          <Tag
            toggle={
              toggle.get(tag.fieldValue) ? toggle.get(tag.fieldValue)! : false
            }
            onClick={() => {
              setToggle(toggle.set(tag.fieldValue, !toggle.get(tag.fieldValue)))
            }}
            to={"/blog/"}
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
