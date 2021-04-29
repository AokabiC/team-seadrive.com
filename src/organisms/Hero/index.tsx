/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { HeroImage } from "atoms/HeroImage";
import { HeroMessage } from "atoms/HeroMessage";
import React from "react";

export const Hero: React.FC = () => {
  return (
    <>
      <HeroImage />
      <HeroMessage />
      <div
        css={css`
          height: 100vh;
        `}
      />
    </>
  );
};
