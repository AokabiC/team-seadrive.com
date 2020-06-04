import React from "react"
import { graphql } from "gatsby"

import Bio from "@/components/molecules/bio"
import Layout from "@/components/layout"
import SEO from "@/utils/seo"
import ArticleCard from "@/components/molecules/articlecard"

const BlogIdx: React.FC<any> = ({ data, location }) => {
  const siteTitle = "Blog"
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Blog" />
      <section>
        {posts.map(({ node }: any) => {
          return (
            <ArticleCard
              key={node.fields.slug}
              slug={node.fields.slug}
              frontmatter={node.frontmatter}
            />
          )
        })}
      </section>
      <Bio />
    </Layout>
  )
}

export default BlogIdx

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
