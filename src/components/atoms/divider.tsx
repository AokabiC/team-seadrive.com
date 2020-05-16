import React, { useEffect, useState } from "react"
import styled from "styled-components"
import { animated, useSpring, config } from "react-spring"

const Container = styled.div`
  position: relative;
  width: 100%;
  height: 2px;
  margin-top: 1rem;
`

const Progress = styled(animated.div)`
  background: white;
  height: 2px;
`

const Divider: React.FC = () => {
  const [toggle, set] = useState(false)

  useEffect(() => {
    setTimeout(() => set(true), 1000)
  }, [])

  const spring = useSpring({
    width: toggle ? "100%" : "0%",
    config: config.slow,
  })

  return (
    <Container>
      <Progress style={spring} />
    </Container>
  )
}

export default Divider
