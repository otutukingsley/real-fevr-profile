import React from "react"
import {
  Beta,
  BrandImg,
  MainNavigation,
  NavBrand,
  NavLogoContainer,
  TopNavLinks,
} from "../styles/componentStyles/navigation"
import {
  Container,
  FlexRowContainer,
  OrdinaryLink,
} from "../styles/globalStyles"
import GreenLogo from "../assets/images/realfevr/fevr-sm-logo.svg"
import Dropdown from "./Dropdown"

const Navbar = () => {
  return (
    <MainNavigation>
      <Container>
        <FlexRowContainer justify="space-between">
          <NavBrand href="/" rel="noreferrer" target="_blank">
            <FlexRowContainer gap="0.625rem">
              <NavLogoContainer>
                <BrandImg src={GreenLogo} alt="RealFevr" />
              </NavLogoContainer>
              <Beta>beta</Beta>
            </FlexRowContainer>
          </NavBrand>
          <TopNavLinks>
            <FlexRowContainer gap="1.75rem">
              <OrdinaryLink href="#!">Packs</OrdinaryLink>
              <OrdinaryLink href="#!">Marketplace</OrdinaryLink>
              <OrdinaryLink href="#!">Challenges</OrdinaryLink>
              <OrdinaryLink href="#!">$FEVR</OrdinaryLink>
              <OrdinaryLink href="#!">Learn</OrdinaryLink>
              <OrdinaryLink href="#!">Staking</OrdinaryLink>
              <Dropdown />
            </FlexRowContainer>
          </TopNavLinks>
        </FlexRowContainer>
      </Container>
    </MainNavigation>
  )
}

export default Navbar
