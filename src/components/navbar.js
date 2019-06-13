import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"
import { rhythm } from "../utils/typography"
import { BaseLink, BrandLink } from "./base"

const NavBase = styled.header`
    display: flex;
    background: rgba(248, 249, 250, .8);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    z-index: 100;
`

const NavContainer = styled.section`
    display: flex;
    flex: 1;
    align-items: center;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: flex-start;
    padding-left: 1rem;
`

const LogoImage = () => (
    <StaticQuery
        query={NavbarQuery}
        render={data => (
                <Image
                    fixed={data.logo.childImageSharp.fixed}
                    style={{
                        marginRight: rhythm(1 / 2),
                        marginBottom: 0,
                        minWidth: 50,
                        borderRadius: `100%`,
                    }}
                    imgStyle={{
                        borderRadius: `50%`,
                    }}
                />
        )}
    />
)

const NavItem = ({ linkTo, children }) => (
    <BaseLink to={linkTo}>
        {children}
    </BaseLink>
)


const NavBrand = ({ linkTo, children }) => (
    <BrandLink to={linkTo}>
        {children}
    </BrandLink>
)

const Navbar = ({ pathname }) => {
    return (
        <NavBase>
            <NavContainer>
                <LogoImage />
                <NavBrand linkTo="/">SeA:</NavBrand>
                <NavItem linkTo="/blog">Blog</NavItem>
                <NavItem linkTo="/works">Works</NavItem>
            </NavContainer>
            <NavContainer />
        </NavBase>
    )
}

const NavbarQuery = graphql`
    query NavbarQuery {
        logo: file(absolutePath: { regex: "/Team_SeAdrive_logo.png/" }) {
            childImageSharp {
                fixed(width: 50, height: 50) {
                ...GatsbyImageSharpFixed
                }
            }
        }
    }
`

export default Navbar