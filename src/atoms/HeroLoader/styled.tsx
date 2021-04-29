/** @jsxImportSource @emotion/react */
import { css, keyframes } from "@emotion/react";
import styled from "@emotion/styled";

const slide = keyframes`
  0% {
    transform:translateX(0%);
  }
  100% {
    transform:translateX(100%);
  }
`;

const Container = styled.div(
  ({ theme }) => css`
    position: fixed;
    height: 100%;
    top: 0;
    left: 0;

    animation: ${slide} 2s ease-in-out 0s 1 forwards;
    background-image: linear-gradient(
      -60deg,
      ${theme.color.thirdPartyTwitter} 80%,
      rgba(0, 0, 0, 0) 80%
    );
    left: -50%;
    opacity: 0.1;
    right: -50%;
    z-index: -100000;
  `
);

export const Loader: React.FC = () => {
  const conf: Array<[string, number]> = [
    ["0s", 160],
    ["0.06s", 180],
    ["0.14s", 200],
    ["0.24s", 220],
    ["0.39s", 240],
  ];
  return (
    <>
      {conf.map(([timing, hue]) => (
        <Container
          key={timing}
          css={css`
            animation-delay: ${timing};
            background-image: linear-gradient(
              -60deg,
              hsl(${hue}, 100%, 50%) 80%,
              rgba(0, 0, 0, 0) 80%
            );
          `}
        />
      ))}
    </>
  );
};
