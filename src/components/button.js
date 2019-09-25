import React from "react"
import styled from "styled-components"
import { BaseLink } from "./base"
import Color from "./const/color"
import Sizes from "./const/sizes"

const Button = styled(props => <BaseLink {...props} />)`
    background: ${Color.primary_dark};
    color: white;
    border-radius: ${Sizes.border_radius};
    display: inline-block;
    text-align: center;
    padding: .2rem 1rem;
`

export default Button