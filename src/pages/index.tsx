import React from "react"
import { graphql } from "gatsby"

import Bio from "@/components/molecules/bio"
import Layout from "@/components/layout"
import SEO from "@/components/atoms/seo"
import Card from "@/components/molecules/card"
import Links from "@/components/links"
import styled from "styled-components"

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
          }
        }
      }
    }
  }
`
