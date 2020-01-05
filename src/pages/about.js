import React from "react"
import { graphql } from "gatsby"
import styled, { keyframes } from "styled-components"
import SEO from "../components/seo"
import Bio from "../components/molecules/bio"
import Layout from "../components/layout"
import Links from "../components/links"
import Color from "../components/const/color"
import { BaseLink } from "../components/base"
import Ul from "../components/atoms/list"

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
        const siteTitle = "About"
        const posts = data.allMarkdownRemark.edges
        return (
            <Layout location={this.props.location} title={siteTitle}>
                <SEO title={siteTitle}/>
                <section>
                <dl>
                    <dt>名前</dt>
                    <dd>碧黴(あおかび)</dd>
                    <dt>所属</dt>
                    <dd>東北大学工学部 機械知能・航空工学科 3年 (2017/04 入学)</dd>
                    <dt>略歴(情報関係)</dt>
                    <dd><Ul>
                        <li>2020/01 : DISCO presents ディスカバリーチャンネル コードコンテスト2020本選 出場予定</li>
                        <li>2019/11 : ACM-ICPC Asia Yokohama Regional 2019 16位 (Aobayama_dropout)</li>
                        <li>2019/11 : ACM-ICPC Asia Bangkok Regional 2019 19位 (Aobayama_dropout)</li>
                        <li>2019/09 : 第一回日本最強プログラマー学生選手権決勝 出場</li>
                        <li>2019/08 : 株式会社モイ ツイキャスサマーインターンシップ</li>
                        <li>2018/12 : ACM-ICPC Asia Yokohama Regional 2018 21位 (Aobayama_dropout)</li>
                        <li>2018/11 : CODE THANKS FESTIVAL 2018 出場</li>
                    </Ul></dd>
                    <dt>略歴(イラスト関係)</dt>
                    <dd><Ul>
                        <li>2018/06 : SOUND VOLTEX FLOOR 東方永夜抄アピールカードコンテスト 採用</li>
                    </Ul></dd>
                    <dt>資格など</dt>
                    <dd><Ul>
                        <li>応用情報技術者 (2019春)</li>
                    </Ul></dd>
                    <dd><Links/></dd>
                </dl>
                </section>
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
