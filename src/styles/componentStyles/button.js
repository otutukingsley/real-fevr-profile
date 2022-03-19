import styled from "styled-components"

export const CustomBtnLink = styled.a`
  box-shadow: 0 25px 50px rgb(29 53 117 / 50%);
  font-weight: 900;
  line-height: 1em;
  user-select: none;
  text-transform: uppercase;
  border: 0;
  position: relative;
  text-align: center;
  opacity: 0.8;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 2.5px;
  cursor: pointer;
  letter-spacing: 0.02em;

  &:hover {
    opactiy: 1;
  }
`
