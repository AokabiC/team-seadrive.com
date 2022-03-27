/** @jsxImportSource @emotion/react */
import React from "react";
import * as Styled from "./styled";

export const HeroMessage: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.MessageMobile />
      <Styled.Message />
      <Styled.Line />
      <div
        css={{
          flexGrow: 1,
        }}
      />
    </Styled.Container>
  );
};
