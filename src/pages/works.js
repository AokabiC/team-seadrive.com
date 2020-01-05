import React from "react"
import { graphql } from "gatsby"
import styled, { keyframes } from "styled-components"
import Bio from "../components/molecules/bio"
import Layout from "../components/layout"
import Anchor from "../components/atoms/anchor"
import Links from "../components/links"
import Color from "../components/const/color"
import SEO from "../components/seo"
import Card from "../components/molecules/card"
import { BaseLink } from "../components/base";
import Ul from "../components/atoms/list";

const fadeColor = keyframes`
    to {
    color: ${Color.primary_faded};
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
                        <Anchor.In to="/compro_with_arisa/">
                            銀髪赤眼の後輩と学ぶ競技プログラミング
                         </Anchor.In>
                    </li>
                    <li>
                        <Anchor.In to="/compro_with_arisa2/">
                            銀髪赤眼の後輩と学ぶ競技プログラミング2
                         </Anchor.In>
                    </li>
                </Ul></dd>
                <dt>通販など</dt>
                <dd><Ul>
                    <li><Anchor.Ext href="https://team-seadrive.booth.pm">BOOTH</Anchor.Ext></li>
                    <li><Anchor.Ext href="https://www.melonbooks.co.jp/circle/index.php?circle_id=41118">メロンブックス</Anchor.Ext></li>
                </Ul></dd>
                </dl>
                </section>
            </Layout>
        )
    }
}

export default Works

