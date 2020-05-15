import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/molecules/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Card from "../components/molecules/card"
import Links from "../components/links"
import styled from "styled-components"

const Base = styled.div`
  display: flex;
  flex-direction: column;
`

class Index extends React.Component {
  render() {
    const { data } = this.props
    const posts = data.allMarkdownRemark.edges
    return (
      <>
        {/* <Background /> */}
        <Layout
          image={data.backgroundImage.childImageSharp.fluid}
          location={this.props.location}
          title={"index"}
        >
          <SEO title="SeA:" />
          <Base>
            {posts.map(({ node }) => {
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
      </>
    )
  }
}

export default Index

export const pageQuery = graphql`
  query {
    backgroundImage: file(absolutePath: { regex: "/img_bg.jpeg/" }) {
      childImageSharp {
        fluid(quality: 100, maxWidth: 1920) {
          ...GatsbyImageSharpFluid_withWebp_noBase64
        }
      }
    }
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
