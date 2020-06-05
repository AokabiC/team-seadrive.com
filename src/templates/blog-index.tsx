import React from "react"
import { graphql } from "gatsby"

import Bio from "@/components/molecules/bio"
import Layout from "@/components/layout"
import SEO from "@/utils/seo"
import ArticleCard from "@/components/molecules/articlecard"
import TagList from "@/components/organisms/taglist"

const BlogIndexTemplate: React.FC<any> = ({ data, location }) => {
  const siteTitle = "Blog"
  const posts = data.allMarkdownRemark.edges
  return (
    <Layout location={location} title={siteTitle}>
      <SEO title="Blog" />
      <section>
        <TagList />
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
