/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import { Link } from "atoms/Link";
import React from "react";

interface Props {
  mobile?: boolean;
}

export const CircleLogo: React.FC<Props> = ({ mobile = false }) => {
  return (
    <Link href="/">
      {mobile ? (
        <div
          css={css`
            width: 48px;
            height: 48px;
          `}
        >
          <img
            src="/images/seadrive_logo_48x48.png"
            alt="logo"
            width="48px"
            height="48px"
          />
        </div>
      ) : (
        <div
          css={css`
            width: 64px;
            height: 64px;
          `}
        >
          <img
            src="/images/seadrive_logo_64x64.png"
            alt="logo"
            width="64px"
            height="64px"
          />
        </div>
      )}
    </Link>
  );
};
