/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const Text = styled.div(
  ({ theme }) => css`
    color: ${theme.color.textHighEmphasisInverse};
    font-size: 3rem;
    /* letter-spacing: 0.5rem; */
    margin-right: 2rem;
    opacity: 0;
    transform: translateY(100%);
    animation: ${keyframes`
      0% {
        opacity: 0;
        transform: translateY(1.5rem);
      }
      100% {
        opacity: 1;
        transform: translateY(0);
      }
    `} 1s ease-in-out 0s 1 forwards;
  `
);

export const Message: React.FC = () => {
  const items = "team-seadrive.com".split("");
  const timing = Array.from({ length: items.length }, (_, i) => `${i * 0.05}s`);
  return (
    <div
      css={css`
        flex-grow: 6;
        display: flex;
        align-items: flex-end;
        justify-content: flex-end;
      `}
    >
      {timing.map((t, idx) => (
        <Text
          key={t}
          css={css`
            animation-delay: ${t};
          `}
        >
          {items[idx]}
        </Text>
      ))}
    </div>
  );
};

export const Line = styled.div(
  ({ theme }) => css`
    background: ${theme.color.borderHighEmphasisInverse};
    width: 0%;
    animation: ${keyframes`
    0% {
      width: 0%;
    }
    100% {
      width: 100%;
    }
  `} 1s ease-out 1s 1 forwards;
    height: 2px;
    margin-top: 1rem;
  `
);

export const Container = styled.div(css`
  position: absolute;
  top: 0;
  right: 0;
  width: 100%;
  height: 100vh;
  display: flex;
  flex-flow: column;
  z-index: -100000;
`);
