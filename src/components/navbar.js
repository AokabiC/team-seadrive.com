import React from "react"
import { graphql, StaticQuery } from "gatsby"
import styled, { keyframes } from "styled-components"
import Color from "../components/const/color"
import Image from "gatsby-image"
import { BaseLink } from "./base"

const fadeColor = keyframes`
    to {
    color: ${Color.primary_faded};
    }
`

const NavLink = styled(BaseLink)`
    font-size: .9rem;
    margin: 0 .5rem;
    color: ${Color.primary};
    outline: none;
    &:hover{
        animation: ${fadeColor} .5s linear forwards;
    }
`

const BrandLink = styled(NavLink)`
    font-size: 1.1rem;
`

const NavBase = styled.header`
    display: flex;
    background: rgba(248, 249, 250, .8);
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    width: 100%;
    padding: .4rem 0;
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
    font-family: "Segoe UI";
`

const LogoImage = () => (
    <StaticQuery
        query={NavbarQuery}
        render={data => (
                <Image
                    fixed={data.logo.childImageSharp.fixed}
                    style={{
                        marginRight: 0,
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
    <NavLink to={linkTo}>
        {children}
    </NavLink>
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