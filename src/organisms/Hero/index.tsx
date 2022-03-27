/** @jsxImportSource @emotion/react */
import { HeroImage } from "atoms/HeroImage";
import { HeroLoader } from "atoms/HeroLoader";
import { HeroMessage } from "molecules/HeroMessage";
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
    </>
  );
};
