import { default as NextLink, LinkProps } from "next/link";
import React, { PropsWithChildren } from "react";
import * as Styled from "./styled";

export const Tag: React.FC<PropsWithChildren<LinkProps>> = ({
  children,
  ...linkProps
}) => (
  <NextLink {...linkProps}>
    <Styled.Anchor>{children}</Styled.Anchor>
  </NextLink>
);
