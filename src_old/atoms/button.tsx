import styled from "styled-components";
import Color from "../utils/color";
import Anchor from "./anchor";

const Button = styled(Anchor.In)`
  background: ${Color.primary_dark};
  color: white;
  border-radius: 0.2rem;
  display: inline-block;
  text-align: center;
  padding-top: 0.3rem;
  padding-bottom: 0.3rem;
  padding-left: 1rem;
  padding-right: 1rem;
`;

export default Button;
