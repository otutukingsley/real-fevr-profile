import { keyframes } from "styled-components"

export const slideInTop = keyframes`
  0% {
    opacity: 0;
    transform: translateY(-250px);
  }

  100% {
    opacity: 1;
    transform: translateY(0);
  }
`
export const slideOutTop = keyframes`
  0% {
   opacity: 1;
    transform: translateY(0);

  }

  100% {
    opacity: 0;
    transform: translateY(-250px);
  }
`
export const bounceIn = keyframes`
  0% {
    animation-timing-function: ease-in;
    opacity: 0;
    transform: translateY(-250px);
  }

  38% {
    animation-timing-function: ease-out;
    opacity: 1;
    transform: translateY(0);
  }

  55% {
    animation-timing-function: ease-in;
    transform: translateY(-65px);
  }

  72% {
    animation-timing-function: ease-out;
    transform: translateY(0);
  }

  81% {
    animation-timing-function: ease-in;
    transform: translateY(-28px);
  }

  90% {
    animation-timing-function: ease-out;
    transform: translateY(0);
  }

  95% {
    animation-timing-function: ease-in;
    transform: translateY(-8px);
  }

  100% {
    animation-timing-function: ease-out;
    transform: translateY(0);
  }
}`

export const moveHorizontally = (width) => keyframes`
  0% {
    width: 0;
  }
  100% {
    width: ${width};
  }
`
