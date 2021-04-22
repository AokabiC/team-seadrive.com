import { default as NextLink, LinkProps } from "next/link";
import React, { PropsWithChildren } from "react";
import * as Styled from "./styled";

export const Link: React.FC<
  PropsWithChildren<LinkProps> & { external?: boolean }
> = ({ children, external = false, ...linkProps }) =>
  external ? (
    <Styled.Anchor target="_blank">{children}</Styled.Anchor>
  ) : (
    <NextLink {...linkProps}>
      <Styled.Anchor>{children}</Styled.Anchor>
    </NextLink>
  );
