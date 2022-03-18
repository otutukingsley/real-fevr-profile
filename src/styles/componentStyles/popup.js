import styled, { keyframes } from "styled-components"

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

export const PopupBg = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(0deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
    linear-gradient(287.31deg, rgba(48, 107, 224, 0.5), rgba(29, 53, 117, 0.5)),
    linear-gradient(
      338.9deg,
      rgba(0, 0, 0, 0.6) 25.61%,
      rgba(0, 0, 0, 0.09) 62.53%
    );
  backdrop-filter: blur(3px);
  position: fixed;
  z-index: 200;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1rem;
  top: 0;
  left: 0;
`
export const PopupWrapper = styled.div`
  width: 45rem;
  height: auto;
  box-shadow: 0 5px 16px rgba(0, 0, 0, 0.2);
  background: #000;
  color: ${({ theme }) => theme.colors.white};
  position: relative;
  z-index: 1000;
  padding: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  animation: ${bounceIn} 1s ease 0s 1 normal forwards;
`

export const CloseBtn = styled.button`
  background: transparent;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  cursor: pointer;
  transition: all 0.5s ease-in;
  margin-left: auto;

  &:hover {
    transform: rotate(180deg);
  }
`
export const CloseBtnContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`

export const Congratulations = styled.h2`
  width: 100%;
  display: block;
  margin: 3rem 0;
  // font-size: 20px;
  background: linear-gradient(141.32deg, #30e06f 4.58%, #118139 122.96%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-fill-color: transparent;
  text-shadow: 0px 10px 20px rgba(29, 53, 117, 0.5);
  font-weight: bold;
  text-transform: capitalize;
`
