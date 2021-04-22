/** @jsxImportSource @emotion/react */
import React from "react";
import * as Styled from "./styled";

type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const ButtonCircle: React.FC<Props> = ({ onClick, children }) => (
  <Styled.Container>
    <Styled.Circle />
    <Styled.Button onClick={onClick}>{children}</Styled.Button>
  </Styled.Container>
);
