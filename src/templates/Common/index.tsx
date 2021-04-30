import { LeftNavBar } from "organisms/LeftNavBar";
import { TopNavBar } from "organisms/TopNavBar";
import React from "react";
import * as Styled from "./styled";

interface Props {
  inverse?: boolean;
}

export const CommonLayout: React.FC<Props> = ({ inverse, children }) => (
  <Styled.Wireframe>
    <LeftNavBar inverse={inverse} />
    <TopNavBar />
    <Styled.Content>{children}</Styled.Content>
  </Styled.Wireframe>
);
