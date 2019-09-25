import React from "react"
import styled from "styled-components"
import Navbar from "../components/navbar"
import Footerbar from "../components/footerbar"
import { BaseContainer } from "./base"
import GlobalStyle from "../utils/basestyle"
// import 'prismjs/plugins/line-numbers/prism-line-numbers.css';
const LayoutStyle = styled.div`
`

const LocationName = styled.h3`
    text-align: center;
    letter-spacing: .5rem;
`

class Layout extends React.Component {
  render() {
    const { location, title, children } = this.props
    const rootPath = `${__PATH_PREFIX__}/`
    let contentsHeader
    return (
    <React.Fragment>
        <GlobalStyle />
        <LayoutStyle>
            <BaseContainer>
            <Navbar/>
            <main>
                <LocationName> {title} </LocationName>
                {children}
            </main>
            <Footerbar/>
            </BaseContainer>
        </LayoutStyle>
    </React.Fragment>
    )
  }
}

export default Layout
