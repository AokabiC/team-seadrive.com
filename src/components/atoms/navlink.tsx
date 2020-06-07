import styled from "styled-components"
import { animated } from "react-spring"
import { Link } from "gatsby"

const ALink = animated(Link)
const NavLink = styled(ALink)`
  text-decoration: none;
  font-size: 1.2rem;
  font-family: mortise, sans-serif;
  font-weight: 400;
  font-style: normal;
`

export default NavLink
