/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { HeroImage } from "atoms/HeroImage";
import { HeroLoader } from "atoms/HeroLoader";
import { HeroMessage } from "atoms/HeroMessage";
import React from "react";

interface Props {
  isVisible: boolean;
}

export const Hero: React.FC<Props> = ({ isVisible }) => {
  return (
    <>
      <HeroLoader />
      <HeroImage isVisible={isVisible} />
      <HeroMessage />
      <div
        css={css`
          height: 100vh;
        `}
      />
    </>
  );
};
