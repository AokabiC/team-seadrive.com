import Image from "next/image";
import React from "react";
import * as Styled from "./styled";

export const HeroImage: React.FC = () => {
  return (
    <Styled.Container>
      <Image
        src="/images/hero/bg_xl.jpeg"
        layout="fill"
        objectFit="cover"
        quality={100}
        priority={true}
      />
    </Styled.Container>
  );
};
