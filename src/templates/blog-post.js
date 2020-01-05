import React from "react"
import RehypeReact from "rehype-react"
import { Link, graphql } from "gatsby"
import Color from "../components/const/color"
import styled from "styled-components"
import Bio from "../components/molecules/bio"
import Anchor from "../components/atoms/anchor"
import Heading from "../components/atoms/heading"
import Layout from "../components/layout"
import SEO from "../components/seo"
require(`katex/dist/katex.min.css`)

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

const Paragraph = styled.p`
    text-indent: 0em; 
`


const renderAst = new RehypeReact({
    createElement: React.createElement,
    components: {
      h1: Heading.H1,
      h2: Heading.H2,
      h3: Heading.H3,
      h4: Heading.H4,
      p: Paragraph,
      a: Anchor.Ext,
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
              <Anchor.In to={previous.fields.slug} rel="prev">
                ← {previous.frontmatter.title}
              </Anchor.In>
            )}
          </li>
          <li>
            {next && (
              <Anchor.In to={next.fields.slug} rel="next">
                {next.frontmatter.title} →
              </Anchor.In>
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
