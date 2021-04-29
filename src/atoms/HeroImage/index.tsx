/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from "next/image";
import React, { useState } from "react";
import * as Styled from "./styled";

interface Props {
  isVisible: boolean;
}

export const HeroImage: React.FC<Props> = ({ isVisible }) => {
  const [loaded, setLoaded] = useState(false);
  return (
    <Styled.Container
      css={css`
        opacity: ${loaded ? (isVisible ? 1 : 0.15) : 0};
      `}
    >
      <Image
        src="/images/hero/bg_xl.jpeg"
        layout="fill"
        objectFit="cover"
        quality={100}
        onLoad={() => setLoaded(true)}
      />
    </Styled.Container>
  );
};
