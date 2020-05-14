import { useTrail, animated, config } from "react-spring"
import styled from "styled-components"
import React, { useState, useEffect } from "react"

const items = "team-seadrive.com".split("")

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 4rem;
  overflow: hidden;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
`

const Text = styled.div`
  position: relative;
  line-height: 80px;
  color: white;
  font-size: 4rem;
  font-weight: 500;
  will-change: transform, opacity;
  overflow: hidden;
  padding: 1rem;
`
const AnimatedText = animated(Text)

const TopMessage: React.FC<any> = () => {
  const [toggle, set] = useState(false)
  const trail = useTrail(items.length, {
    config: {
      ...config.stiff,
      clamp: true,
    },
    opacity: toggle ? 1 : 0,
    x: toggle ? 0 : 20,
    height: toggle ? 80 : 0,
  })

  useEffect(() => {
    setTimeout(() => set(true), 500)
  }, [])

  return (
    <Container>
      {trail.map(({ x, height, ...rest }, index) => (
        <AnimatedText
          key={items[index]}
          style={{
            ...rest,
            transform: x.interpolate(x => `translate3d(0,${x}px,0)`),
          }}
        >
          {items[index]}
        </AnimatedText>
      ))}
    </Container>
  )
}

export default TopMessage
