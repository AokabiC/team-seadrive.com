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
        src="/images/hero/bg_md.webp"
        layout="fill"
        objectFit="cover"
        quality={100}
        onLoad={() => setLoaded(true)}
        css={(theme) => css`
          ${theme.mediaQuery.md} {
            display: none !important;
          }
        `}
      />
      <Image
        src="/images/hero/bg_xl.webp"
        layout="fill"
        objectFit="cover"
        quality={100}
        onLoad={() => setLoaded(true)}
        css={(theme) => css`
          display: none !important;
          ${theme.mediaQuery.md} {
            display: initial !important;
          }
        `}
      />
    </Styled.Container>
  );
};
