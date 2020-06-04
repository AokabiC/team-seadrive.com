import React from "react"
import { graphql } from "gatsby"

import Bio from "@/components/molecules/bio"
import Layout from "@/components/layout"
import SEO from "@/utils/seo"
import Card from "@/components/molecules/card"

const BlogIndexTemplate: React.FC<any> = ({ data, location }) => {
  const siteTitle = "Blog"
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Blog" />
      <section>
        {posts.map(({ node }: any) => {
          const title = node.frontmatter.title || node.fields.slug
          return (
            <Card
              key={node.fields.slug}
              to={node.fields.slug}
              title={title}
              label={node.frontmatter.date}
              subtitle={node.frontmatter.subtitle}
            >
              {node.frontmatter.description || node.excerpt}
            </Card>
          )
        })}
      </section>
      <Bio />
    </Layout>
  )
}

export default BlogIndexTemplate

export const pageQuery = graphql`
  query($tag: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    allMarkdownRemark(
      limit: 1000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
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
