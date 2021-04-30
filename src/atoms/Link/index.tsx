/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { default as NextLink, LinkProps } from "next/link";
import React, { PropsWithChildren } from "react";

export const Link: React.FC<
  PropsWithChildren<LinkProps> & { external?: boolean; notext?: boolean }
> = ({ children, external = false, notext = false, ...linkProps }) =>
  external ? (
    <a
      css={css`
        text-decoration: none;
        cursor: pointer;
        line-height: ${notext ? 0 : `inherit`};
      `}
      target="_blank"
    >
      {children}
    </a>
  ) : (
    <NextLink {...linkProps}>
      <a
        css={css`
          text-decoration: none;
          cursor: pointer;
          line-height: ${notext ? 0 : `inherit`};
        `}
      >
        {children}
      </a>
    </NextLink>
  );
