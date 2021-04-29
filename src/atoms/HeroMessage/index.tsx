/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import * as Styled from "./styled";

export const HeroMessage: React.FC = () => {
  return (
    <Styled.Container>
      <Styled.Message />
      <Styled.Line />
      <div
        css={css`
          flex-grow: 1;
        `}
      />
    </Styled.Container>
  );
};
