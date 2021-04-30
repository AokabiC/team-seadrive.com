/** @jsxImportSource @emotion/react */
import { TopNavigateArrow } from "atoms/TopNavigateArrow";
import React from "react";
import * as Styled from "./styled";

interface Props {
  isVisible?: boolean;
}

export const HeroMessage: React.FC<Props> = ({ isVisible }) => {
  return (
    <Styled.Container>
      <Styled.MessageMobile />
      <Styled.Message />
      <Styled.Line />
      <TopNavigateArrow isVisible={isVisible} />
    </Styled.Container>
  );
};
