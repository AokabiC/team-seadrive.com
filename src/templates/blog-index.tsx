import React, { useState, useEffect, useRef } from "react"
import { graphql } from "gatsby"

import Bio from "@/components/molecules/bio"
import Layout from "@/components/layout"
import SEO from "@/utils/seo"
import ArticleCard from "@/components/molecules/articlecard"
import TagList from "@/components/organisms/taglist"
import useIntersect from "@/utils/useintersect"
import { Loader } from "@/components/atoms/loader"

const BlogIndexTemplate: React.FC<any> = ({ data, location }) => {
  const siteTitle = "Blog"
  const posts = data.allMarkdownRemark.edges
  const [pageNumber, setPageNumber] = useState(1)
  const postsPerLoad = 10
  const [entities, setEntities] = useState([
    ...posts.slice((pageNumber - 1) * postsPerLoad, pageNumber * postsPerLoad),
  ])
  const target = useRef(null)
  const intersect = useIntersect(target, {
    threshold: 0.1,
    rootMargin: "0px 0px 50% 0px",
  })

  useEffect(() => {
    if (intersect) {
      setPageNumber(prevPage => {
        setEntities(prevEntities => [
          ...prevEntities,
          ...posts.slice(
            pageNumber * postsPerLoad,
            (pageNumber + 1) * postsPerLoad
          ),
        ])
        return prevPage + 1
      })
    }
  }, [intersect])

  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Blog" />
      <section>
        <TagList />
        {entities.map(({ node }, index) => {
          return (
            <ArticleCard
              key={index}
              slug={node.fields.slug}
              frontmatter={node.frontmatter}
            />
          )
        })}
        {entities.length < posts.length && <Loader ref={target} />}
      </section>
      <Bio />
    </Layout>
  )
}

export default BlogIndexTemplate

export const pageQuery = graphql`
  query($tag: [String!]) {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: $tag } } }
    ) {
      edges {
        node {
          excerpt
          fields {
            slug
          }
          frontmatter {
            date(formatString: "YYYY/MM/DD")
            title
            subtitle
            description
            tags
          }
        }
      }
    }
  }
`
