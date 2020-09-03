import React, { useState } from "react"
import styled from "styled-components"

import { graphql, useStaticQuery, navigate } from "gatsby"
import color from "@/utils/color"
import { useLocation } from "@reach/router"
import queryString from "query-string"

const Tag = styled.div<{ toggle: boolean }>`
  border-radius: 0.2rem;
  padding: 0 0.2rem;
  background: ${props =>
    props.toggle ? "rgba(0,0,200,0.2)" : "rgba(0,0,0,0)"};
  color: ${color.primary_dark};
`

const TagList: React.FC<any> = () => {
  const data = useStaticQuery(TagQuery)
  const tags = data.allMarkdownRemark.group
  const location = useLocation()
  const query = location.search ? queryString.parse(location.search) : null
  const selectedTags =
    query != null && typeof query.q === "string" ? query.q.split(" ") : []
  const [toggle, setToggle] = useState(
    new Map<string, boolean>(selectedTags.map(tag => [tag, true]))
  )

  return (
    <Container>
      {tags.map((tag: any) => (
        <li key={tag.fieldValue}>
          <Tag
            toggle={
              toggle.get(tag.fieldValue) ? toggle.get(tag.fieldValue)! : false
            }
            onClick={() => {
              setToggle(prev => {
                prev.set(tag.fieldValue, !toggle.get(tag.fieldValue))
                const selectedTags = [...toggle.keys()]
                  .filter(key => {
                    return toggle.get(key)
                  })
                  .join("+")
                const url =
                  "/blog/" + (selectedTags ? `?q=${selectedTags}` : "")
                navigate(url)
                return prev
              })
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
