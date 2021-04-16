import React from "react";
import styled from "styled-components";
import { TopMessageDesktop, TopMessageMobile } from "../molecules/topmessage";
import Divider from "../atoms/divider";

export const Hero: React.FC = () => (
  <Container>
    <Flex flex={4}>
      <TopMessageMobile />
      <TopMessageDesktop />
    </Flex>
    <Flex flex={1}>
      <Divider />
    </Flex>
  </Container>
);

const Container = styled.div`
  grid-row: 1/4;
  grid-column: 1/4;
  height: 100vh;
  display: flex;
  flex-flow: column;
`;

const Flex = styled.div<{ flex: number }>`
  flex: ${(props) => props.flex};
`;
