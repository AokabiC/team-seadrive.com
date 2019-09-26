import React from "react"
import { graphql } from "gatsby"
import styled, { keyframes } from "styled-components"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Color from "../components/const/color"
import SEO from "../components/seo"
import Card from "../components/card"
import { BaseLink } from "../components/base";

const fadeColor = keyframes`
    to {
    color: ${Color.primary_faded};
    }
`

const NavLink = styled(BaseLink)`
    color: ${Color.primary};
    outline: none;
    &:hover{
        animation: ${fadeColor} .5s linear forwards;
    }
`

class Works extends React.Component {
    render() {
        const { data } = this.props
        const siteTitle = "Works"
        const posts = data.allMarkdownRemark.edges
        return (
            <Layout location={this.props.location} title={siteTitle}>
                <p>書籍サポート</p>
                <ul>
                    <li>
                        <NavLink to="/compro_with_arisa/">
                            銀髪赤眼の後輩と学ぶ競技プログラミング
                         </NavLink>
                    </li>
                    <li>
                        <NavLink to="/compro_with_arisa2/">
                            銀髪赤眼の後輩と学ぶ競技プログラミング2
                         </NavLink>
                    </li>
                </ul>
            </Layout>
        )
    }
}

export default Works

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
