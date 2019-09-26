import React from "react"
import styled from "styled-components"
import { Basea } from "../components/base";
import Color from "../components/const/color"

const Link = styled(Basea)`
    color: ${Color.primary_dark};
`;


class Links extends React.Component {
    render() {
        return (
        <React.Fragment>
        <p>
        <Link href="https://twitter.com/AokabiC?lang=ja" target="_blank">
        Twitter
        </Link> / <Link href="https://pixiv.me/aokabic" target="_blank">
        pixiv
        </Link> / <Link href="https://marshmallow-qa.com/aokabic" target="_blank">
        マシュマロ(質問・メッセージはこちら)
        </Link>
        </p>
        <p>
        <Link href="https://github.com/AokabiC" target="_blank">
        GitHub
        </Link> / <Link href="https://atcoder.jp/user/AokabiC" target="_blank">
        AtCoder
        </Link> / <Link href="https://qiita.com/AokabiC" target="_blank">
        Qiita
        </Link>
        </p>
        <p><Link href="http://amzn.asia/guNCWpJ" target="_blank">
        ほしいものリスト
        </Link>
        </p>
        <p>
        Email: team.seadrive[at]gmail.com
        </p>
        </React.Fragment>
        )
    }
}

export default Links
