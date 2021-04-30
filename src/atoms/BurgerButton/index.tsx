import React from "react";
import * as Styled from "./styled";

type Props = {
  onClick?: React.MouseEventHandler<HTMLButtonElement>;
  open: boolean;
};

export const BurgerButton: React.FC<Props> = ({ onClick, open }) => {
  return (
    <Styled.Button onClick={onClick}>
      <Styled.ToggleButtonBar open={open} />
    </Styled.Button>
  );
};
