import React from "react"
import styled from "styled-components"
import TopMessage from "../molecules/topmessage"

const Hero: React.FC = () => {
  return (
    <Container>
      <Flex flex={3} />
      <Flex flex={1}>
        <TopMessage />
      </Flex>
    </Container>
  )
}

const Container = styled.article`
  height: 100vh;
  display: flex;
  flex-flow: column;
`

const Flex = styled.div<{ flex: number }>`
  flex: ${props => props.flex};
`

export default Hero
