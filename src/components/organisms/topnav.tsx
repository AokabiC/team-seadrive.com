import React from "react"
import styled from "styled-components"
import { useSpring, useTrail, animated } from "react-spring"
import { Link } from "gatsby"

const Base = styled.header`
  grid-area: topnav;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: flex-end;
  z-index: 1;
`

const NavLinkWrapper = styled.div`
  display: flex; /* スライドインアニメーションに必要 */
  padding-left: 2rem;
`

const ALink = animated(Link)
const NavLink = styled(ALink)`
  text-decoration: none;
  font-weight: 500;
  font-size: 1.2rem;
  font-family: zilla slab;
`

const items = [
  { to: "/about", text: "About" },
  { to: "/blog", text: "Blog" },
  { to: "/works", text: "Works" },
]

export const TopNav = ({ isVisible }: any) => {
  const spring = useSpring({
    color: isVisible ? "black" : "white",
  })

  const trail = useTrail(items.length, {
    y: isVisible ? 0 : -20,
    opacity: isVisible ? 1 : 0,
  })

  return (
    <Base>
      {trail.map(({ y, ...rest }, index) => (
        <NavLinkWrapper>
          <NavLink
            to={items[index].to}
            style={{
              ...spring,
              ...rest,
              transform: y.to(y => `translateY(${y}px)`),
            }}
          >
            {items[index].text}
          </NavLink>
        </NavLinkWrapper>
      ))}
    </Base>
  )
}
