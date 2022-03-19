import React from "react"
import {
  TopNavigation,
  TopNavBrand,
  TopNavLinks,
  BrandContainer,
  BrandImg,
  Pg,
} from "../styles/componentStyles/navigation"
import {
  Container,
  FlexRowContainer,
  OrdinaryLink,
} from "../styles/globalStyles"
import PurpleLogo from "../assets/images/realfevr/fevr-purple-logo.png"
import Soccer from "../assets/images/extras/football.svg"
import SocialLinks from "./SocialLinks"
import { CustomBtnLink } from "../styles/componentStyles/button"

const TopNav = () => {
  return (
    <TopNavigation>
      <Container>
        <FlexRowContainer justify="space-between">
          <TopNavBrand
            href="https://www.realfevr.com/buy-fevr"
            rel="noreferrer"
            target="_blank"
          >
            <FlexRowContainer gap="0.625rem">
              <BrandContainer>
                <BrandImg src={PurpleLogo} alt="Buy FEVR" />
              </BrandContainer>
              <Pg>BUY $FEVR</Pg>
            </FlexRowContainer>
          </TopNavBrand>
          <TopNavLinks>
            <FlexRowContainer gap="2.5rem">
              <SocialLinks />
              <OrdinaryLink href="#!" bold>
                STAKING
              </OrdinaryLink>
              <OrdinaryLink href="#!" bold disabled>
                NFT P2E GAME <span className="soon">(SOON)</span>
              </OrdinaryLink>

              <CustomBtnLink className="btn-light btn-sm">
                <span>Play Fantasy</span>
                <span>
                  <img src={Soccer} alt="button" />
                </span>
              </CustomBtnLink>
            </FlexRowContainer>
          </TopNavLinks>
        </FlexRowContainer>
      </Container>
    </TopNavigation>
  )
}

export default TopNav
