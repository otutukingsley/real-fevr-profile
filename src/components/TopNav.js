import React from "react"
import {
  TopNavigation,
  TopNavBrand,
  TopNavLinks,
  BrandContainer,
  BrandImg,
  Pg,
  TopNavSocials,
  TopNavSocialsItem,
  TopNavSocialsItemLink,
  OrdinaryLink,
} from "../styles/componentStyles/navigation"
import { Container, FlexRowContainer, Img } from "../styles/globalStyles"
import PurpleLogo from "../assets/images/realfevr/fevr-purple-logo.png"
import Telegram from "../assets/images/socials/telegram.svg"
import Facebook from "../assets/images/socials/facebook.svg"
import Twitter from "../assets/images/socials/twitter.svg"
import Linkedin from "../assets/images/socials/linkedin.svg"
import Instagram from "../assets/images/socials/instagram.svg"
import Youtube from "../assets/images/socials/youtube.svg"
import Soccer from "../assets/images/extras/football.svg"
import { Button } from "./Buttons"

const TopNav = () => {
  return (
    <TopNavigation>
      <Container>
        <FlexRowContainer>
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
              <TopNavSocials>
                <TopNavSocialsItem>
                  <TopNavSocialsItemLink href="#!">
                    <Img src={Telegram} alt="Telegram" />
                  </TopNavSocialsItemLink>
                </TopNavSocialsItem>
                <TopNavSocialsItem>
                  <TopNavSocialsItemLink href="#!">
                    <Img src={Twitter} alt="Twitter" />
                  </TopNavSocialsItemLink>
                </TopNavSocialsItem>
                <TopNavSocialsItem>
                  <TopNavSocialsItemLink href="#!">
                    <Img src={Youtube} alt="Youtube" />
                  </TopNavSocialsItemLink>
                </TopNavSocialsItem>
                <TopNavSocialsItem>
                  <TopNavSocialsItemLink href="#!">
                    <Img src={Facebook} alt="Facebook" />
                  </TopNavSocialsItemLink>
                </TopNavSocialsItem>
                <TopNavSocialsItem>
                  <TopNavSocialsItemLink href="#!">
                    <Img src={Instagram} alt="Instagram" />
                  </TopNavSocialsItemLink>
                </TopNavSocialsItem>
                <TopNavSocialsItem>
                  <TopNavSocialsItemLink href="#!">
                    <Img src={Linkedin} alt="Linkedin" />
                  </TopNavSocialsItemLink>
                </TopNavSocialsItem>
              </TopNavSocials>
              <OrdinaryLink href="#!">STAKING</OrdinaryLink>
              <OrdinaryLink href="#!">
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
