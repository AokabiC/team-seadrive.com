import React, { useState } from "react"
import styled from "styled-components"
import { useSpring, animated } from "react-spring"
import Anchor from "./anchor"

const SVGWrapper = styled.svg`
  left: 0;
  width: 3rem;
  height: 3rem;
  transform: rotate(90deg);
`

const Ring = styled(animated.circle)`
  stroke-dasharray: 200 200;
  fill: transparent;
`

const ChildWrapper = styled.div`
  position: absolute;
  left: 0.758em;
  top: 0.55em;
  font-size: 1.2rem;
`

const Container = styled(animated.div)`
  position: relative;
  color: blueviolet;
  stroke: blueviolet;
`

const CircleButton: React.FC<any> = ({ toggle, to, children }) => {
  const [hover, setHover] = useState(false)

  const offsetSpring = useSpring({
    offset: hover ? 75 : 200,
  })
  const colorSpring = useSpring({
    color: toggle ? "black" : "white",
    stroke: toggle ? "black" : "white",
  })
  return (
    <Anchor.Ext
      href={to}
      target="_blank"
      onMouseEnter={() => {
        setHover(true)
      }}
      onMouseLeave={() => {
        setHover(false)
      }}
    >
      <Container style={colorSpring}>
        <ChildWrapper>{children}</ChildWrapper>
        <SVGWrapper>
          <Ring
            cx="1.5rem"
            cy="1.5rem"
            r="1.2rem"
            strokeDashoffset={offsetSpring.offset.to(x => `${x}`)}
          />
        </SVGWrapper>
      </Container>
    </Anchor.Ext>
  )
}

export default CircleButton
