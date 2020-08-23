import Color from "@/utils/color"
import styled, { keyframes } from "styled-components"

const drop = keyframes`
 0% {
    box-shadow: 0 .5rem 0 0;
    opacity: 0;
  }

  25%,
  50%,
  75% {
    box-shadow: 0 1.5rem 0 0;
    opacity: 1;
  }

  100% {
    box-shadow: 0 2.5rem 0 0;
    opacity: 0;
  }
`

export const Loader = styled.div`
  color: ${Color.primary_dark};
  position: relative;
  margin-left: auto;
  margin-right: auto;
  margin-bottom: 5rem;

  &,
  &::before,
  &::after {
    content: "";
    border-radius: 50%;
    width: 0.5rem;
    height: 0.5rem;
    animation: ${drop} 1.8s infinite ease-in-out;
  }

  &::before,
  &::after {
    position: absolute;
    top: 0;
  }

  &::before {
    left: -1rem;
  }
  & {
    animation-delay: 0.1s;
  }
  &::after {
    left: 1rem;
    animation-delay: 0.2s;
  }
`
