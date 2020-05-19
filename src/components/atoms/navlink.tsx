import styled from "styled-components"
import { animated } from "react-spring"
import { Link } from "gatsby"

const ALink = animated(Link)
const NavLink = styled(ALink)`
  text-decoration: none;
  font-weight: 500;
  font-size: 1.2rem;
  font-family: zilla slab;
`

export default NavLink
