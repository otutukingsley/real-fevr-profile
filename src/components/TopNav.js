import React from "react"
import {
  TopNavigation,
  TopNavBrand,
  TopNavLinks,
  BrandContainer,
  BrandImg,
  Pg,
  OrdinaryLink,
} from "../styles/componentStyles/navigation"
import { Container, FlexRowContainer, Img } from "../styles/globalStyles"
import PurpleLogo from "../assets/images/realfevr/fevr-purple-logo.png"
import Soccer from "../assets/images/extras/football.svg"
import { Button } from "./Buttons"
import SocialLinks from "./SocialLinks"

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
              <OrdinaryLink href="#!" bold>
                NFT P2E GAME <span className="soon">(SOON)</span>
              </OrdinaryLink>
              <Button name="Play Fantasy" green={false} img={Soccer} />
            </FlexRowContainer>
          </TopNavLinks>
        </FlexRowContainer>
      </Container>
    </TopNavigation>
  )
}

export default TopNav
