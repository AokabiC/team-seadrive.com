import React from "react"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"
import Color from "../../utils/color"
import Button from "../atoms/button"
import Anchor from "@/components/atoms/anchor"
import useIntersect from "@/utils/useintersect"

const Base = styled(animated.div)`
  background: ${Color.light};
  border-radius: 0.2rem;
  padding: 1.6rem;
  flex-grow: 1;
  margin-bottom: 1.6rem;
  &:last-of-type {
    margin-bottom: 4rem;
  }
`

const Title = styled.h3`
  margin-bottom: 0.5rem;
  color: ${Color.text_black};
`

const Header = styled.div`
  margin-bottom: 0.5rem;
`

const Label = styled.span`
  border-radius: 5rem;
  padding: 0.1rem 0.4rem;
  margin-right: 0.4rem;
  background: ${Color.base_light};
`

const Subtitle = styled.span`
  color: ${Color.text_gray};
`

const Content = styled.p`
  margin-bottom: 1rem;
`

const Footer = styled.div``

const Card: React.FC<any> = ({ title, label, subtitle, to, children }) => {
  const target = React.useRef(null)
  const intersect = useIntersect(target, 0.2, true)
  const spring = useSpring({
    opacity: intersect ? 1 : 0,
    transform: intersect ? "0" : "translateY(60px)",
  })
  return (
    <Base style={spring} ref={target}>
      <Title>
        <Anchor.In to={to}>{title}</Anchor.In>
      </Title>
      <Header>
        <Label>{label}</Label>
        <Subtitle>{subtitle}</Subtitle>
      </Header>
      <Content>{children}</Content>
      <Footer>
        <Button to={to}>See more…</Button>
      </Footer>
    </Base>
  )
}

export default Card
