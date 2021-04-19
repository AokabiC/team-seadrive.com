import React from "react";
import * as Styled from "./styled";

type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
};

export const Button: React.FC<Props> = ({ onClick, children }) => (
  <Styled.Button onClick={onClick}>{children}</Styled.Button>
);
