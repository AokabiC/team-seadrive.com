import React from "react"
import { graphql } from "gatsby"

import Bio from "@/components/molecules/bio"
import Layout from "@/components/layout"
import SEO from "@/utils/seo"
import Links from "@/components/links"
import styled from "styled-components"
import ArticleCard from "@/components/molecules/articlecard"

const Base = styled.div`
  display: flex;
  flex-direction: column;
`

const Index: React.FC<any> = ({ data, location }) => {
  const posts = data.allMarkdownRemark.edges
  return (
    <React.Fragment>
      <Layout location={location} title={"index"}>
        <SEO title="Top" />
        <Base>
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
          <Links />
        </Base>
        <Bio />
      </Layout>
    </React.Fragment>
  )
}

export default Index

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 5
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { subtitle: { nin: ["書籍サポート"] } } }
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
