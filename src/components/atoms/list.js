import styled from "styled-components"

const Ul = styled.ul`
    list-style-type: none;
    margin-left: 1em;
    li {
        &::before {
            content: "💎";
            margin-left: -1em;
        }
    }
`

export default Ul