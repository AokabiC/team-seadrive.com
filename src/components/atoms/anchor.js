import React from "react"
import { Link } from "gatsby"
import styled from "styled-components"
import Color from "../../utils/color"

const In = styled(Link)`
    text-decoration: none;
    font-family: Noto sans JP;
    color: ${Color.primary_dark};
`;

const Ext = In.withComponent("a");

const Anchor = {
    In,
    Ext,
};

export default Anchor
