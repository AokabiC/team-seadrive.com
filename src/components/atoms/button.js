import React from "react"
import styled from "styled-components"
import Color from "../const/color"
import Sizes from "../const/sizes"
import Anchor from "./anchor"

const Button = styled(Anchor.In)`
    background: ${Color.primary_dark};
    color: white;
    border-radius: ${Sizes.border_radius};
    display: inline-block;
    text-align: center;
    padding: .2rem 1rem;
`

export default Button