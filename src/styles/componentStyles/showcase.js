import styled from "styled-components"
import ShowcaseBg from "../../assets/images/extras/bg-showcase.png"

export const ShowcaseMain = styled.div`
  height: 750px;
  background-image: url(${ShowcaseBg});
  color: ${({ theme }) => theme.colors.white};
  background-attachment: scroll;
  background-position: center top;
  position: relative;
  padding: 0;
  z-index: 1;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      180deg,
      ${({ theme }) => theme.colors.DarkGreen} 0%,
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
