import styled from "styled-components"

export const CustomBtn = styled.button`
  text-transform: upperCase;
  font-weight: 900;
  padding: 0.5rem 0.75rem;
  color: ${({ theme, color }) =>
    color === "blue" ? theme.colors.darkblue : theme.colors.black};
  box-shadow: 0px 10px 20px rgba(29, 53, 117, 0.3);
  text-decoration: none;
  transition: ${({ theme }) => theme.transitions.all};
  cursor: pointer;
  border: none;
  outline: none;
`
