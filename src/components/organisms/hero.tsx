import React from "react"
import styled from "styled-components"
import { TopMessage, TopMessageMobile } from "../molecules/topmessage"
import Divider from "../atoms/divider"
import { useMediaQuery } from "react-responsive"

const Hero: React.FC = () => {
  const isMobile = useMediaQuery({
    query: "(max-width: 768px)",
  })
  return (
    <Container>
      <Flex flex={4}>{isMobile ? <TopMessageMobile /> : <TopMessage />}</Flex>
      <Flex flex={1}>
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
