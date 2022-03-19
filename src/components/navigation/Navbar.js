import React, { useContext } from "react"
import {
  Beta,
  BrandImg,
  MainNavigation,
  NavBrand,
  NavLogoContainer,
  TopNavLinks,
} from "../../styles/componentStyles/navigation"
import {
  Container,
  FlexRowContainer,
  Img,
  OrdinaryLink,
} from "../../styles/globalStyles"
import GreenLogo from "../../assets/images/realfevr/fevr-sm-logo.svg"
import Close from "../../assets/images/extras/close-white.svg"
import Hamburger from "../../assets/images/extras/hamburger.svg"
import Dropdown from "../showcase/Dropdown"
import { useViewPort } from "../../hooks/viewport"
import { CloseBtn } from "../../styles/componentStyles/popup"
import { popupContext } from "../../context/PopupState"

const Navbar = () => {
  const context = useContext(popupContext)
  const { menu, handleMenu } = context
  const { width } = useViewPort()
  const breakPoint = 1065

  return (
    <MainNavigation breakpoint={breakPoint}>
      <Container>
        <FlexRowContainer justify="space-between">
          <NavBrand href="/" rel="noreferrer" target="_blank">
            <FlexRowContainer gap="0.625rem">
              <NavLogoContainer breakpoint={breakPoint}>
                <BrandImg src={GreenLogo} alt="RealFevr" />
              </NavLogoContainer>
              <Beta>beta</Beta>
            </FlexRowContainer>
          </NavBrand>

          {width > breakPoint ? (
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
          ) : (
            <CloseBtn onClick={() => handleMenu()}>
              <Img src={menu ? Close : Hamburger} alt="close" />
            </CloseBtn>
          )}
        </FlexRowContainer>
      </Container>
    </MainNavigation>
  )
}

export default Navbar
