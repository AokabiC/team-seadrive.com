import React from "react"
import { graphql } from "gatsby"

import Bio from "../components/bio"
import Layout from "../components/layout"
import SEO from "../components/seo"
import Slideshow from "../components/slideshow"
import Card from "../components/card"
import styled from "styled-components"
import { BaseLink } from "../components/base"

const Base = styled.div`
    display: flex;
    flex-direction: column;
`


class Index extends React.Component {
    render() {
        const { data } = this.props
        const siteTitle = this.props.data.site.siteMetadata.title
        const posts = data.allMarkdownRemark.edges
        return (
            <Layout location={this.props.location} title={siteTitle}>
                <SEO title="SeA:"/>
                <Base>

                {/* ブログコンテンツ */}
                <Slideshow/>

                {posts.map(({ node }) => {
                    const title = node.frontmatter.title || node.fields.slug
                    return (
                        <Card
                            key={node.fields.slug}
                            to={node.fields.slug}
                            title={title}
                            label={node.frontmatter.date}
                            subtitle={node.frontmatter.subtitle}>
                            <p
                                dangerouslySetInnerHTML={{
                                    __html: node.excerpt,
                                }}
                            />
                        </Card>
                    )
                })}
                </Base>
                <Bio />
            </Layout>
        )
    }
}

export default Index

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
          }
        }
      }
    }
  }
`
