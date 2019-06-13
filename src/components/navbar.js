import React from "react"
import { Link, graphql, StaticQuery } from "gatsby"
import styled from "styled-components"
import Image from "gatsby-image"
import { rhythm } from "../utils/typography"

const StyledLink = styled(props => <Link {...props} />)`
    padding: 0 .5rem;
    color: #5755d9;
    outline: none;
    text-decoration: none;
`;

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

const NavItem = ({ linkTo, children }) => (
    <StyledLink to={linkTo}>
        {children}
    </StyledLink>
)

var LogoImage = () => (
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

const Navbar = ({ pathname }) => {
    return (
        <NavBase>
            <NavContainer>
                <LogoImage />
                <NavItem linkTo="/">Home</NavItem>
                <NavItem linkTo="/blog">Blog</NavItem>
                <NavItem linkTo="/blog"></NavItem>
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