/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import * as Styled from "./styled";

interface Props {
  isVisible: boolean;
}

export const HeroImage: React.FC<Props> = ({ isVisible }) => {
  const [loaded, setLoaded] = useState(false);
  const [wait, setWait] = useState(false);
  useEffect(() => {
    if (loaded) {
      setTimeout(() => {
        setWait(true);
      }, 500);
    }
  }, [loaded]);
  return (
    <Styled.Container
      css={css`
        opacity: ${wait ? (isVisible ? 1 : 0.15) : 0};
      `}
    >
      <Image
        src="/images/hero/bg_md.jpeg"
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
        src="/images/hero/bg_xl.jpeg"
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
