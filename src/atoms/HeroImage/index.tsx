/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useEffect, useState } from "react";
import { theme } from "utils/theme";
import * as Styled from "./styled";

interface Props {
  isVisible: boolean;
}

export const HeroImage: React.FC<Props> = ({ isVisible }) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => setLoaded(true), 800);
  }, []);
  return (
    <Styled.Container
      css={css`
        opacity: ${loaded ? (isVisible ? 1 : 0.15) : 0};
      `}
    >
      <picture
        css={css`
          width: inherit;
          height: inherit;
          > * {
            width: inherit;
            height: inherit;
            object-fit: cover;
          }
        `}
      >
        <source
          type="image/webp"
          media={`(max-width: ${theme.mediaQueryValue.md}px)`}
          srcSet="/images/hero/bg_md.webp"
        />
        <source
          type="image/webp"
          media={`(min-width: ${theme.mediaQueryValue.md + 1}px)`}
          srcSet="/images/hero/bg_xl.webp"
        />
        <source
          media={`(max-width: ${theme.mediaQueryValue.md}px)`}
          srcSet="/images/hero/bg_md.jpeg"
        />
        <source
          media={`(min-width: ${theme.mediaQueryValue.md + 1}px)`}
          srcSet="/images/hero/bg_xl.jpeg"
        />
        <img
          src="/images/hero/bg_xl.jpeg"
          onLoad={() => setLoaded(true)}
          alt="background"
        />
      </picture>
    </Styled.Container>
  );
};
