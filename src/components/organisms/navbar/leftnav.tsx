import React from "react"
import styled from "styled-components"
import { LogoImage } from "@/components/atoms/logo"
import { useSpring, useTrail, animated } from "react-spring"
import { Link } from "gatsby"
import { LinkIconList } from "@/components/molecules/linkiconlist"

const Base = styled.header`
  grid-area: leftnav;
  position: sticky;
  top: 0;
  height: calc(95vh - 120px);
  transform: translateY(70px);
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: space-between;
  z-index: 1;

  @media (max-width: 860px) {
    display: none;
  }
`

const NavLinkList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
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
  font-size: 1.2rem;
  font-family: zilla slab;
`

const items = [
  { to: "/about/", text: "About" },
  { to: "/blog/", text: "Blog" },
  { to: "/works/", text: "Works" },
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
      <NavLinkList>
        <LogoImage />
        {trail.map(({ x, ...rest }, index) => (
          <NavLinkWrapper key={index}>
            <NavLink
              to={items[index].to}
              style={{
                ...spring,
                ...rest,
                transform: x.to(x => `translateX(${x}px)`),
              }}
              key={index}
            >
              {items[index].text}
            </NavLink>
          </NavLinkWrapper>
        ))}
      </NavLinkList>
      <LinkIconList toggle={toggle} />
    </Base>
  )
}
