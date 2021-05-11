/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { BurgerButton } from "atoms/BurgerButton";
import { Link } from "atoms/Link";
import Image from "next/image";
import { BurgerMenu } from "organisms/BurgerMenu";
import React, { useState } from "react";
import * as Styled from "./styled";

export const TopNavBar: React.FC = () => {
  const [toggle, setToggle] = useState(false);

  return (
    <Styled.Container>
      <BurgerMenu open={toggle} />
      <Link href="/" notext>
        <Image
          src="/images/seadrive_logo_48x48.png"
          quality="100"
          layout="fixed"
          width="48px"
          height="48px"
          css={css`
            z-index: 1;
          `}
        />
      </Link>
      <BurgerButton
        onClick={() => {
          setToggle(!toggle);
        }}
        open={toggle}
      />
    </Styled.Container>
  );
};
