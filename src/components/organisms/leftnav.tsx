import React from "react"
import styled from "styled-components"
import LogoImage from "@/components/atoms/logo"
import { useSpring, useTrail, animated } from "react-spring"
import { Link } from "gatsby"

const Base = styled.header`
  grid-area: leftnav;
  position: sticky;
  top: 0;
  height: 100vh;
  transform: translateY(70px);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  z-index: 1;
`

const NavLinkWrapper = styled.div`
  display: flex; /* スライドインアニメーションに必要 */
  padding-left: 1rem;
  padding-right: 1rem;
  padding-top: 2rem;
`

const ALink = animated(Link)
const NavLink = styled(ALink)`
  text-decoration: none;
  font-weight: 500;
`

const items = [
  { to: "/about", text: "About" },
  { to: "/blog", text: "Blog" },
  { to: "/works", text: "Works" },
]

export const LeftNav = ({ toggle }: any) => {
  const spring = useSpring({
    color: toggle ? "black" : "white",
  })

  const trail = useTrail(items.length, {
    x: toggle ? 0 : 20,
    opacity: toggle ? 1 : 0,
  })

  return (
    <Base>
      <LogoImage />
      {trail.map(({ x, ...rest }, index) => (
        <NavLinkWrapper>
          <NavLink
            to={items[index].to}
            style={{
              ...spring,
              ...rest,
              transform: x.to(x => `translateX(${x}px)`),
            }}
          >
            {items[index].text}
          </NavLink>
        </NavLinkWrapper>
      ))}
    </Base>
  )
}
