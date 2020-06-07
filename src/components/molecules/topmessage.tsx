import { useTrail, animated, config } from "react-spring"
import styled from "styled-components"
import React, { useState, useEffect } from "react"

const Container = styled.div`
  height: 100%;
  width: 100%;
  padding-right: 1rem;
  overflow: hidden;
  display: flex;
  justify-content: flex-end;
  align-items: flex-end;

  @media (max-width: 860px) {
    display: none;
  }
`

const Text = styled(animated.div)`
  line-height: 80px;
  color: white;
  font-size: 3rem;
  font-family: mortise, sans-serif;
  font-weight: 400;
  font-style: normal;
  letter-spacing: 0.5rem;
  will-change: transform, opacity;
  overflow: hidden;
  padding: 1rem;
`

export const TopMessageDesktop: React.FC<any> = () => {
  const [toggle, set] = useState(false)
  const items = "team-seadrive.com".split("")

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
        <Text
          key={index}
          style={{
            ...rest,
            transform: x.to(x => `translate3d(0,${x}px,0)`),
          }}
        >
          {items[index]}
        </Text>
      ))}
    </Container>
  )
}

const ContainerMobile = styled(Container)`
  padding: 0;
  flex-direction: column;

  display: none;

  @media (max-width: 860px) {
    display: flex;
  }
`

const TextMobile = styled(Text)`
  padding: 0;
`

export const TopMessageMobile: React.FC<any> = () => {
  const [toggle, set] = useState(false)
  const items = ["team-", "seadrive", ".com"]

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
    <ContainerMobile>
      {trail.map(({ x, height, ...rest }, index) => (
        <TextMobile
          key={index}
          style={{
            ...rest,
            transform: x.to(x => `translate3d(0,${x}px,0)`),
          }}
        >
          {items[index]}
        </TextMobile>
      ))}
    </ContainerMobile>
  )
}
