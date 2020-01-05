import React from "react"
import { graphql } from "gatsby"
import styled, { keyframes } from "styled-components"
import Bio from "../components/bio"
import Layout from "../components/layout"
import Links from "../components/links"
import Color from "../components/const/color"
import SEO from "../components/seo"
import Card from "../components/card"
import { BaseLink } from "../components/base";
import Ul from "../components/list";

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
        return (
            <Layout location={this.props.location} title={siteTitle}>
                <section><dl>
                <dt>書籍サポート</dt>
                <dd><Ul>
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
                </Ul></dd>
                <dt>通販など</dt>
                <dd><Ul>
                    <li><a href="https://team-seadrive.booth.pm">BOOTH</a></li>
                    <li><a href="https://www.melonbooks.co.jp/circle/index.php?circle_id=41118">メロンブックス</a></li>
                </Ul></dd>
                </dl>
                </section>
            </Layout>
        )
    }
}

export default Works

