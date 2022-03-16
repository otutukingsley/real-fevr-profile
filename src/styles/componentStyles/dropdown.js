import styled from "styled-components"

export const CustomDropdown = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.lightGreen};
  font-family: Azo Black;
  cursor: pointer;
  border-radius: 2.5rem;
  padding: 0.313rem 0.875rem 0.313rem 0.438rem;
  background: linear-gradient(
    141.32deg,
    ${({ theme }) => theme.colors.darkerGreen} 4.58%,
    ${({ theme }) => theme.colors.blackGreen} 122.96%
  );
  transition: ${({ theme }) => theme.transitions.all};
  box-sizing: border-box;
  position: relative;
  z-index: 101;

  &:before {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    left: 0;
    top: 0;
    border-radius: 2.5rem;
    box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25),
      0px 0px 10px ${({ theme }) => theme.colors.thinGreen};
    transition: ${({ theme }) => theme.transitions.all};
    z-index: 0;
  }
  &:hover {
    background: linear-gradient(
      100deg,
      rgba(48, 224, 111, 0.4) 4.58%,
      rgba(17, 129, 57, 0.3) 122.96%
    );
    transition: ${({ theme }) => theme.transitions.all};
    &:before {
      content: "";
      position: absolute;
      box-shadow: 0px 6px 6px rgba(0, 0, 0, 0.25), 0px 0px 15px #30e06f;
    }
  }
`

export const DropdownAvatarContainer = styled.div`
  height: 2rem;
  width: 2rem;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.01);
  box-shadow: inset 0px 1px 2px rgba(0, 0, 0, 0.3);
  border: 3px solid white;
  overflow: hidden;
`
