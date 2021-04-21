import React from "react";
import { CommonLayout } from "templates/Common";
import * as Styled from "./styled";

export const BlogPostTemplate: React.FC = ({ children }) => {
  return (
    <CommonLayout>
      <Styled.Container>
        <Styled.Title>aaa</Styled.Title>
        {children}
      </Styled.Container>
    </CommonLayout>
  );
};
