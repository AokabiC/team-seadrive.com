import React from "react";
import * as Styled from "./styled";

export interface Props {
  title?: string;
}

export const CodeBlock: React.FC<Props> = ({ title, children }) => {
  return (
    <Styled.Container hasTitle={!!title}>
      <Styled.Title>{title}</Styled.Title>
      <pre>
        <code>{children}</code>
      </pre>
    </Styled.Container>
  );
};
