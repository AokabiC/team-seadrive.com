import React from "react"
import styled from "styled-components"
import TopMessage from "../molecules/topmessage"
import Divider from "../atoms/divider"

const Hero: React.FC = () => {
  return (
    <Container>
      <Flex flex={3} />
      <Flex flex={1}>
        <TopMessage />
        <Divider />
      </Flex>
    </Container>
  )
}

const Container = styled.div`
  grid-row: 1/4;
  grid-column: 1/4;
  height: 100vh;
  display: flex;
  flex-flow: column;
`

const Flex = styled.div<{ flex: number }>`
  flex: ${props => props.flex};
`

export default Hero
