import styled from "styled-components"

export const CustomBtn = styled.button`
  text-transform: uppercase;
  opacity: ${({ opacity }) => (opacity ? "0.8" : "1.0")};
  font-weight: 900;
  padding: 0.5rem 0.75rem;
  background: ${({ green }) =>
    green
      ? "linear-gradient(141.32deg, #30E06F 4.58%, #118139 122.96%)"
      : "linear-gradient(168.98deg, #ffffff 33.75%, #6a84cb 184.73%)"};
  color: ${({ theme, green }) =>
    green ? theme.colors.white : theme.colors.darkblue};
  box-shadow: 0px 10px 20px rgba(29, 53, 117, 0.3);
  text-decoration: none;
  font-family: ${({ fontFamily }) => (fontFamily ? fontFamily : "inherit")};
  cursor: pointer;
  border: none;
  outline: none;
  &:hover {
    transition: ${({ theme }) => theme.transitions.all};
    background: ${({ theme, green }) =>
      green
        ? "linear-gradient(169.98deg, #30E06F 33.75%, #118139 110%)"
        : "linear-gradient(169.98deg, #ffffff 33.75%, #6a84cb 184.73%)"};
    opacity: 1;
  }
`
