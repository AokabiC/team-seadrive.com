import React, { useState } from "react"
import styled from "styled-components"
import { animated, useSpring } from "react-spring"
import BurgerButton from "../../atoms/burgerbutton"
import NavLink from "@/components/atoms/navlink"
import { LinkIconListMobile } from "@/components/molecules/linkiconlist"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faEnvelope } from "@fortawesome/free-solid-svg-icons"

const Container = styled(animated.div)`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 200vh;
  z-index: 1;
  opacity: 0.9;
  background-image: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  align-items: center;
  padding-top: calc(10% + 50vh);
  padding-bottom: calc(10% + 50vh);
  margin-top: -50vh;
`

const BurgerLink = styled(NavLink)`
  color: white;
`

const EmailWrapper = styled.div`
  color: white;
`

const items = [
  { to: "/about", text: "About" },
  { to: "/blog", text: "Blog" },
  { to: "/works", text: "Works" },
]

const BurgerMenu: React.FC = () => {
  const [open, setOpen] = useState(false)

  const spring = useSpring({
    transform: open ? "translateX(0%)" : "translateX(100%)",
  })

  return (
    <div>
      <Container style={spring}>
        {items.map((item, index) => (
          <BurgerLink to={item.to} key={index}>
            {item.text}
          </BurgerLink>
        ))}
        <LinkIconListMobile />
        <EmailWrapper>
          <FontAwesomeIcon icon={faEnvelope} /> team.seadrive[at]gmail.com
        </EmailWrapper>
      </Container>

      <BurgerButton
        open={open}
        onClick={() => {
          setOpen(!open)
        }}
      />
    </div>
  )
}

export default BurgerMenu
