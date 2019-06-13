import React from "react"
import { Link } from "gatsby"
import styled, { keyframes } from "styled-components"
import { rhythm } from "../utils/typography"

const fadeColor = keyframes`
    to {
        color: deepskyblue;
    }
`

const BaseLink = styled(props => <Link {...props} />)`
    font-size: .9rem;
    margin: 0 .5rem;
    color: royalblue;
    outline: none;
    text-decoration: none;
    &:hover{
        animation: ${fadeColor} .5s linear forwards;
    }
`;

const BrandLink = styled(BaseLink)`
    font-size: 1.1rem;
`

const BaseContainer = styled.div`
    max-width: 48rem;
    margin-left: auto;
    margin-right: auto;
    padding: 4rem 0 1.5rem;
`

export { BaseLink, BrandLink, BaseContainer }
