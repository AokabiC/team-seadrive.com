import styled from "styled-components"
import Color from "../../utils/color"

const BaseHeader = styled.span`
    font-weight: 300;
    color: ${Color.text_black};
    margin-top: 3rem;
    margin-bottom: 1.5rem;
`

const H1 = styled(BaseHeader.withComponent('h1'))`
`

const H2 = styled(BaseHeader.withComponent('h2'))`
`

const H3 = styled(BaseHeader.withComponent('h3'))`
`

const H4 = styled(BaseHeader.withComponent('h4'))`
    margin: 1.5rem 0 .8rem;
`


const Heading = {
    H1,
    H2,
    H3,
    H4,
};

export default Heading;