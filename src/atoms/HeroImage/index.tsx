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
    setLoaded(true);
  }, []);
  return (
    <Styled.Container
      css={css`
        opacity: ${loaded ? (isVisible ? 1 : 0.15) : 0};
      `}
    >
      <img
        src="/images/hero/bg_xl.webp"
        srcSet={`/images/hero/bg_md.webp ${theme.mediaQueryValue.md}w,
                 /images/hero/bg_xl.webp ${theme.mediaQueryValue.lg}w,`}
        css={css`
          width: inherit;
          height: inherit;
          object-fit: cover;
        `}
      />
    </Styled.Container>
  );
};
