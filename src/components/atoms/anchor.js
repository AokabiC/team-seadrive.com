import { Link } from "gatsby"
import styled from "styled-components"
import Color from "../../utils/color"

const In = styled(Link)`
    text-decoration: none;
    color: ${Color.primary_dark};
`;

const Ext = In.withComponent("a");

const Anchor = {
    In,
    Ext,
};

export default Anchor
