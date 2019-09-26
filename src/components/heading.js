import React from "react"
import styled from "styled-components"
import Color from "./const/color"

const BaseHeader = styled.span`
    font-weight: 500;
    color: ${Color.text_black};
    margin: 2rem 0 1rem;
`

const H1 = styled(BaseHeader.withComponent('h1'))`
`

const H2 = styled(BaseHeader.withComponent('h2'))`
`

const H3 = styled(BaseHeader.withComponent('h3'))`
`

const Heading = {
    H1,
    H2,
    H3,
};

export default Heading;