/** @jsxImportSource @emotion/react */
import { BurgerButton } from "atoms/BurgerButton";
import { CircleLogo } from "atoms/CircleLogo";
import { BurgerMenu } from "organisms/BurgerMenu";
import React, { useState } from "react";
import * as Styled from "./styled";

export const TopNavBar: React.FC = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Styled.Container>
      <BurgerMenu open={toggle} />
      <CircleLogo mobile />
      <BurgerButton
        onClick={() => {
          setToggle(!toggle);
        }}
        open={toggle}
      />
    </Styled.Container>
  );
};
