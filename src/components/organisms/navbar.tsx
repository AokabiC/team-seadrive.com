import React from "react"
import styled, { withTheme } from "styled-components"
import LogoImage from "@/components/atoms/logo"
import Anchor from "@/components/atoms/anchor"
import { useSpring, animated } from "react-spring"

const Base = styled.header`
  background: rgba(248, 249, 250, 0);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding: 1rem;
  z-index: 100;
`

const Container = styled.nav`
  display: flex;
  width: 300px;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-around;
`

const NavItem: React.FC<any> = ({ to, toggle, children }) => {
  const Div = styled.div``
  const Text = animated(Anchor.In)

  const spring = useSpring({
    color: toggle ? "white" : "black",
  })

  return (
    <Div>
      <Text to={to} style={spring}>
        {children}
      </Text>
    </Div>
  )
}

const Navbar = ({ toggle }: any) => {
  return (
    <Base>
      <Container>
        <LogoImage />
        <NavItem to="/about" toggle={toggle}>
          About
        </NavItem>
        <NavItem to="/blog" toggle={toggle}>
          Blog
        </NavItem>
        <NavItem to="/works" toggle={toggle}>
          Works
        </NavItem>
      </Container>
    </Base>
  )
}

export default Navbar