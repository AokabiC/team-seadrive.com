import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"

export const BaseLink = styled(props => <Link {...props} />)`
    text-decoration: none;
    color: inherit;
`;

export const Basea = BaseLink.withComponent("a");

export const BaseContainer = styled.div`
    display: flex;
    justify-content: center;
    flex-flow: column;
    max-width: 1000px;
    min-height: calc(100vh - 6rem);
    margin: auto;
    padding-top: 4rem;
    padding-left: 15px;
    padding-right: 15px;
`
