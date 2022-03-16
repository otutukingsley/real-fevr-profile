import styled from "styled-components"
import { Pg as Paragraph, CustomLink } from "../globalStyles"

export const TopNavigation = styled.nav`
  background: ${({ theme }) => theme.colors.lightBg};
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.colors.lightBorder};
  padding: 1rem 1.5rem;
  margin-bottom: 2.5rem;
  color: ${({ theme }) => theme.colors.white};
  display: block;
  position: relative;
  z-index: 1000;
`

export const BrandContainer = styled.div`
  width: 1.875rem;
  height: 1.875rem;
  display: block;
  transition: ${({ theme }) => theme.transitions.all};
`

export const Pg = styled.p`
  font-size: 0.875rem;
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
  font-weight: bold;
  color: ${({ theme }) => theme.colors.white};

  .soon {
    font-weight: 300;
    font-family: Azo Sans;
  }
`
