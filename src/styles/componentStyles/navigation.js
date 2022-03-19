import styled from "styled-components"
import { CustomLink } from "../globalStyles"

export const TopNavigation = styled.nav`
  background: ${({ theme }) => theme.colors.lightBg};
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightBorder};
  padding: 1rem 1.5rem;
  margin-bottom: 2.5rem;
  color: ${({ theme }) => theme.colors.white};
  display: block;
  position: relative;
  z-index: 100;
`

export const MainNavigation = styled(TopNavigation)`
  background: transparent;
  border: unset;
  padding: 0rem 1.5rem;
`

export const BrandContainer = styled.div`
  width: 1.875rem;
  height: 1.875rem;
  display: block;
  transition: ${({ theme }) => theme.transitions.all};
`

export const NavLogoContainer = styled.div`
  width: auto;
  max-width: 18vw;
  min-width: 12.5rem;
  height: 3.5rem;
  display: block;
`

export const Beta = styled.div`
  padding: 0.3rem 0.4rem 0.1rem 0.4rem;
  display: block;
  font-size: 0.875rem;
  width: auto;
  text-transform: uppercase;
  background: linear-gradient(119.91deg, #e76af7 -18.1%, #a034ae 82.06%);
  box-shadow: 0px 10px 20px rgba(29, 53, 117, 0.3);
  text-align: center;
  font-family: Azo Black;
`

export const Pg = styled.p`
  font-size: clamp(0.7rem, 2.5vw, 0.875rem);
  font-family: Azo Black;
  letter-spacing: 0.02em;
  text-transform: uppercase;
`

export const TopNavBrand = styled(CustomLink)`
  color: ${({ theme }) => theme.colors.white};
  display: block;
  transition: ${({ theme }) => theme.transitions.all};

  &:hover ${BrandContainer} {
    transition: ${({ theme }) => theme.transitions.all};
    transform: rotate(-15deg) scale(1.1);
  }

  &:hover ${Pg} {
    transition: ${({ theme }) => theme.transitions.all};
    color: ${({ theme }) => theme.colors.purple};
  }
`

export const NavBrand = styled(CustomLink)`
  color: ${({ theme }) => theme.colors.white};
  display: block;
`

export const BrandImg = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`

export const TopNavLinks = styled.div`
  display: block;
  margin: 0;
`

export const TopNavSocials = styled.ul`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  grid-gap: 1rem;
`
export const TopNavSocialsItem = styled.li`
  display: block;
  width: 100%;
`

export const TopNavSocialsItemLink = styled(CustomLink)`
  opacity: 0.7;
  transition: ${({ theme }) => theme.transitions.all};
  display: block;
  width: 100%;

  &:hover {
    opacity: 1;
    transition: ${({ theme }) => theme.transitions.all};
  }
`
export const OrdinaryLink = styled(CustomLink)`
  font-weight: ${({ bold }) => (bold ? "900" : "normal")};
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  font-family: ${({ bold }) => (bold ? "Azo Black" : "Azo Md")};
  font-size: clamp(0.7rem, 2.5vw, 0.875rem);
  .soon {
    font-weight: 300;
    font-family: Azo Sans;
  }
`
