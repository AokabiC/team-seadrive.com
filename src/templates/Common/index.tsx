import { LeftNavBar } from "organisms/LeftNavBar";
import React from "react";
import * as Styled from "./styled";

export const CommonLayout: React.FC = ({ children }) => (
  <Styled.Wireframe>
    <LeftNavBar />
    <Styled.Content>{children}</Styled.Content>
  </Styled.Wireframe>
);
