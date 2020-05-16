import React, { useState } from "react"
import styled from "styled-components"
import LogoImage from "@/components/atoms/logo"
import { useSpring, useTrail, animated, useTransition } from "react-spring"
import { Link } from "gatsby"

const Base = styled.header`
  background: rgba(248, 249, 250, 0);
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  width: 100%;
  padding-top: 3rem;
  padding-left: 3rem;
  padding-right: 3rem;
  z-index: 100;
`
const BaseV = styled(Base)`
  width: 200px;
  height: 100%;
`

const Container = styled.nav`
  display: flex;
  width: auto;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
`
const ContainerV = styled(Container)`
  height: 100%;
  flex-direction: column;
`

const Div = styled.div`
  padding-right: 2rem;
  padding-bottom: 2rem;

  position: relative;
  /* スライドインアニメーションに必要 */
  display: flex;
`
const Text = styled(animated(Link))`
  text-decoration: none;
`

const items = [
  { to: "/about", text: "About" },
  { to: "/blog", text: "Blog" },
  { to: "/works", text: "Works" },
]

export const NavbarVertical = ({ toggle }: any) => {
  const spring = useSpring({
    color: toggle ? "black" : "white",
  })

  const trail = useTrail(items.length, {
    x: toggle ? 0 : 20,
    opacity: toggle ? 1 : 0,
  })

  return (
    <BaseV>
      <ContainerV>
        <Div>
          <LogoImage />
        </Div>
        {trail.map(({ x, ...rest }, index) => (
          <Div>
            <Text
              to={items[index].to}
              style={{
                ...spring,
                ...rest,
                transform: x.to(x => `translateX(${x}px)`),
              }}
            >
              {items[index].text}
            </Text>
          </Div>
        ))}
      </ContainerV>
    </BaseV>
  )
}

export const NavbarHorizontal = ({ toggle }: any) => {
  const spring = useSpring({
    color: toggle ? "black" : "white",
  })

  const trail = useTrail(items.length, {
    x: toggle ? 20 : 0,
    opacity: toggle ? 0 : 1,
  })

  return (
    <Base>
      <Container>
        <Div>
          <LogoImage />
        </Div>
        {trail.map(({ x, ...rest }, index) => (
          <Div>
            <Text
              to={items[index].to}
              style={{
                ...spring,
                ...rest,
                transform: x.to(x => `translateY(${-x}px)`),
              }}
            >
              {items[index].text}
            </Text>
          </Div>
        ))}
      </Container>
    </Base>
  )
}
