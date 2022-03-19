import styled from "styled-components"
import ShowcaseBg from "../../assets/images/extras/bg-showcase.png"

export const ShowcaseMain = styled.div`
  height: auto;
  background-image: url(${ShowcaseBg});
  color: ${({ theme }) => theme.colors.white};
  background-attachment: scroll;
  background-position: center top;
  position: relative;
  padding: 0;
  z-index: 10;

  @media (max-width: ${({ breakPoint }) => breakPoint}px) {
    padding-top: 6rem;
  }
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      178deg,
      ${({ theme }) => theme.colors.darkGreen} 0%,
      ${({ theme }) => theme.colors.lighterPurple} 13%,
      rgba(0, 0, 0, 0) 100%
    );
    z-index: 0;
  }
  &:after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      360deg,
      ${({ theme }) => theme.colors.purpleBlack} 0%,
      ${({ theme }) => theme.colors.blueBlack} 23%,
      rgba(0, 0, 0, 0) 100%
    );
    z-index: 0;
  }
`
