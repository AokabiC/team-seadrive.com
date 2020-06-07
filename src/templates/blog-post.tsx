import React from "react"
import RehypeReact from "rehype-react"
import { graphql } from "gatsby"
import Color from "../utils/color"
import styled from "styled-components"
import Anchor from "@/components/atoms/anchor"
import Heading from "@/components/atoms/heading"
import Layout from "@/components/layout"
import SEO from "@/utils/seo"
import { Share } from "@/components/molecules/share"
require(`katex/dist/katex.min.css`)

const BlogPostTemplate: React.FC<any> = ({ data, pageContext, location }) => {
  const post = data.markdownRemark
  const siteTitle = "Blog"
  const { previous, next } = pageContext

  const trimFooterTitle = (str: string): string => {
    return str.length > 18 ? `${str.slice(0, 17)}...` : str
  }

  return (
    <Layout location={location} title={siteTitle}>
      <SEO
        title={post.frontmatter.title}
        description={post.frontmatter.description || post.excerpt}
      />
      <Container>
        <Title>{post.frontmatter.title}</Title>
        <Subtitle>
          <Label>{post.frontmatter.date}</Label>
          <Share title={post.frontmatter.title} />
        </Subtitle>
        <section>{renderAst(post.htmlAst)}</section>
        <Share />
        <Hr />
        <Footer>
          <div>
            {previous && (
              <Anchor.In to={previous.fields.slug} rel="prev">
                <p>←</p>
                {trimFooterTitle(previous.frontmatter.title)}
              </Anchor.In>
            )}
          </div>
          <div>
            <Anchor.In to="/blog/" rel="prev">
              記事一覧
            </Anchor.In>
          </div>
          <div>
            {next && (
              <Anchor.In to={next.fields.slug} rel="next">
                <p>→</p>
                {trimFooterTitle(next.frontmatter.title)}
              </Anchor.In>
            )}
          </div>
        </Footer>
      </Container>
    </Layout>
  )
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

const Container = styled.article`
  width: 100%;
  padding: 40px;
  padding-bottom: 2rem;
  background: white;
  border-radius: 0.4rem;

  @media (max-width: 860px) {
    padding-left: 5px;
    padding-right: 5px;
    background: inherit;
  }
`

const Label = styled.span`
  border-radius: 5rem;
  padding: 0.1rem 0.4rem;
  margin-right: 1rem;
  background: ${Color.base_light};
`

const Title = styled.h2`
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: ${Color.text_black};
`

const Subtitle = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 2rem;
`

const Hr = styled.hr`
  border-top: 1px dashed #8c8b8b;
  margin-top: 2rem;
  margin-bottom: 1rem;
`

const Footer = styled.div`
  display: flex;

  div {
    flex: 1;
    padding-left: 1rem;
    padding-right: 1rem;
    &:nth-child(2) {
      text-align: center;
      border-left: 1px dashed #8c8b8b;
      border-right: 1px dashed #8c8b8b;
    }
    &:nth-child(3) {
      text-align: right;
    }
  }
`

// markdown

const Paragraph = styled.p`
  text-indent: 0em;
  margin-bottom: 1.5rem;
`

const Table = styled.table`
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 2rem;
  thead {
    background-color: gray;
    color: white;
    padding: 0.5rem;
  }
  tr {
    text-align: center;
    padding: 0.5rem;
    border: solid 1px #8c8b8b;
  }
  td {
    border: solid 1px #8c8b8b;
  }
`

const List = styled.ul`
  list-style-type: none;
  margin-left: 1em;
  margin-bottom: 1rem;
  ul {
    margin-bottom: 0;
  }
  li {
    &::before {
      content: "- ";
      margin-left: -1em;
    }
    p {
      margin: 0;
      /* pタグが挿入されるバグ? */
      margin-top: -1.7rem;
    }
  }
`

const Img = styled.img`
  margin-left: auto;
  margin-right: auto;
  max-width: 650px;
  width: 100%;
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
    table: Table,
    ul: List,
    img: Img,
  },
}).Compiler
