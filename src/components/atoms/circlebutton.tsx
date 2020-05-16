import React from "react"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"
import Anchor from "./anchor"

const Container = styled.svg`
  width: 3rem;
  height: 3rem;
  transform: rotate(90deg);
`

const Ring = styled(animated.circle)`
  stroke: blueviolet;
  stroke-dasharray: 200 200;
  fill: transparent;
`

const CircleButton: React.FC<any> = ({ toggle, to }) => {
  const spring = useSpring({
    offset: toggle ? 75 : 200,
  })
  return (
    <Anchor.In to={to}>
      <Container>
        <Ring
          cx="1.5rem"
          cy="1.5rem"
          r="1.2rem"
          strokeDashoffset={spring.offset.to(x => `${x}`)}
        />
      </Container>
    </Anchor.In>
  )
}

export default CircleButton
