/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import styled from "@emotion/styled";

interface Props {
  open: boolean;
}

export const Button = styled.button(
  ({ theme }) => css`
    position: relative;
    cursor: pointer;
    border: dashed 1px;
    width: 48px;
    height: 48px;
    z-index: 1;
    color: ${theme.color.borderHighEmphasis};
    padding: 8px;
    background: transparent;

    &:active {
      background: ${theme.color.surfaceSecondary};
    }
  `
);

export const ToggleButtonBar: React.FC<Props> = ({ open }) => {
  const items = [
    {
      transform: open
        ? "rotate(-45deg) translateY(0px)"
        : "rotate(0deg) translateY(10px)",
      opacity: 1,
    },
    {
      transform: "none",
      opacity: open ? 0 : 1,
    },
    {
      transform: open
        ? "rotate(45deg) translateY(0px)"
        : "rotate(0deg) translateY(-10px)",
      opacity: 1,
    },
  ];

  return (
    <>
      {items.map(({ transform, opacity }) => (
        <div
          css={(theme) => css`
            position: absolute;
            height: 3px;
            top: calc(48px / 2 - 3px / 2);
            width: calc(100% - 2 * 8px);
            padding: 0;
            background: ${theme.color.borderHighEmphasis};
            transform: ${transform};
            opacity: ${opacity};
            transition: transform ${theme.transitionSpeed.hover} ease-in-out,
              opacity ${theme.transitionSpeed.hover} ease-in-out;
          `}
        />
      ))}
    </>
  );
};
