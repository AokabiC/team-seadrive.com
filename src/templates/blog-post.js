import React from "react"
import RehypeReact from "rehype-react"
import { Link, graphql } from "gatsby"
import Color from "../components/const/color"
import styled from "styled-components"
import Bio from "../components/bio"
import Heading from "../components/heading"
import Layout from "../components/layout"
import SEO from "../components/seo"

const Label = styled.span`
    border-radius: 5rem;
    padding: .1rem .4rem;
    margin-right: .4rem;
    background: ${Color.base_light};
`

const Title = styled.h2`
    /* margin-bottom: .5rem; */
    font-weight: 500;
    color: ${Color.text_black};
`

const renderAst = new RehypeReact({
    createElement: React.createElement,
    components: {
      h2: Heading.H2
    }
  }).Compiler

class BlogPostTemplate extends React.Component {
  render() {
    const post = this.props.data.markdownRemark
    const siteTitle = "Blog"
    const { previous, next } = this.props.pageContext

    return (
      <Layout location={this.props.location} title={siteTitle}>
        <SEO
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
        />
        <Title>{post.frontmatter.title}</Title>
        <p><Label>
          {post.frontmatter.date}
        </Label></p>
        {
            renderAst(post.htmlAst)
        }
        <hr/>
        {/* <Bio /> */}

        <ul
          style={{
            display: `flex`,
            flexWrap: `wrap`,
            justifyContent: `space-between`,
            listStyle: `none`,
            padding: 0,
          }}
        >
          <li>
            {previous && (
              <Link to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Link>
            )}
          </li>
          <li>
            {next && (
              <Link to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Link>
            )}
          </li>
        </ul>
      </Layout>
    )
  }
}

export default BlogPostTemplate

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      htmlAst
      frontmatter {
        title
        subtitle
        date(formatString: "YYYY/MM/DD")
        description
      }
    }
  }
`
