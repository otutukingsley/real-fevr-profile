import React from "react"
import {
  BinanceImgContainer,
  BinanceSection,
  FooterSection,
  FooterWrapper,
  FooterLogoContainer,
  MiniFooter,
  ParnerLogoContainer,
  Partnerh5,
  PartnerHeading,
  Partners,
  FooterPrivacy,
  PrivacyList,
  PrivacyListItem,
  ReservedListItem,
} from "../styles/componentStyles/footer"
import { Container, Img } from "../styles/globalStyles"
import Binance from "../assets/images/extras/binance-logo.svg"
import PartnersOne from "../assets/images/partners/logo-athena.png"
import PartnersTwo from "../assets/images/partners/logo-bepro.png"
import PartnersThree from "../assets/images/partners/logo-bsc.png"
import PartnersFour from "../assets/images/partners/logo-clever.png"
import PartnersFive from "../assets/images/partners/logo-empower-sports.png"
import PartnersSix from "../assets/images/partners/logo-fpf.png"
import PartnersSeven from "../assets/images/partners/logo-gateio.png"
import PartnersEight from "../assets/images/partners/logo-growth.png"
import PartnersNine from "../assets/images/partners/logo-ibc.png"
import PartnersTen from "../assets/images/partners/logo-ir21.png"
import PartnersEleven from "../assets/images/partners/logo-isportconnect.png"
import PartnersTwelve from "../assets/images/partners/logo-ladof.png"
import PartnersThirteen from "../assets/images/partners/logo-ligaportugal.png"
import PartnersFourteen from "../assets/images/partners/logo-morningstar.png"
import PartnersFifteen from "../assets/images/partners/logo-moonrockcapital.png"
import PartnersSixteen from "../assets/images/partners/logo-polkastarter.png"
import PartnersSeventeen from "../assets/images/partners/logo-safe-launch.png"
import PartnersEighteen from "../assets/images/partners/logo-shilling.png"
import PartnersNineteen from "../assets/images/partners/logo-soccerex.png"
import PartnersTweenty from "../assets/images/partners/logo-sportmultimedia.png"
import Logo from "../assets/images/realfevr/fevr-white-logo.svg"
import SocialLinks from "./SocialLinks"

const Footer = () => {
  return (
    <FooterSection>
      <FooterWrapper>
        <Container>
          <PartnerHeading>
            <Partnerh5>Official Partners</Partnerh5>
          </PartnerHeading>
          <Partners>
            <ParnerLogoContainer href="#!">
              <Img src={PartnersTweenty} />
            </ParnerLogoContainer>
            <ParnerLogoContainer href="#!" alt="partners">
              <Img src={PartnersNineteen} />
            </ParnerLogoContainer>
            <ParnerLogoContainer href="#!" alt="partners">
              <Img src={PartnersEighteen} />
            </ParnerLogoContainer>
            <ParnerLogoContainer href="#!" alt="partners">
              <Img src={PartnersSeventeen} />
            </ParnerLogoContainer>
            <ParnerLogoContainer href="#!" alt="partners">
              <Img src={PartnersSixteen} />
            </ParnerLogoContainer>
            <ParnerLogoContainer href="#!" alt="partners">
              <Img src={PartnersFifteen} />
            </ParnerLogoContainer>
            <ParnerLogoContainer href="#!" alt="partners">
              <Img src={PartnersFourteen} />
            </ParnerLogoContainer>

            <ParnerLogoContainer href="#!" alt="partners">
              <Img src={PartnersThirteen} />
            </ParnerLogoContainer>

            <ParnerLogoContainer href="#!" alt="partners">
              <Img src={PartnersTwelve} />
            </ParnerLogoContainer>

            <ParnerLogoContainer href="#!" alt="partners">
              <Img src={PartnersEleven} />
            </ParnerLogoContainer>

            <ParnerLogoContainer href="#!" alt="partners">
              <Img src={PartnersTen} />
            </ParnerLogoContainer>

            <ParnerLogoContainer href="#!" alt="partners">
              <Img src={PartnersNine} />
            </ParnerLogoContainer>

            <ParnerLogoContainer href="#!" alt="partners">
              <Img src={PartnersEight} />
            </ParnerLogoContainer>

            <ParnerLogoContainer href="#!" alt="partners">
              <Img src={PartnersSeven} />
            </ParnerLogoContainer>

            <ParnerLogoContainer href="#!" alt="partners">
              <Img src={PartnersSix} />
            </ParnerLogoContainer>

            <ParnerLogoContainer href="#!" alt="partners">
              <Img src={PartnersFive} />
            </ParnerLogoContainer>

            <ParnerLogoContainer href="#!" alt="partners">
              <Img src={PartnersFour} />
            </ParnerLogoContainer>

            <ParnerLogoContainer href="#!" alt="partners">
              <Img src={PartnersThree} />
            </ParnerLogoContainer>
            <ParnerLogoContainer href="#!" alt="partners">
              <Img src={PartnersTwo} />
            </ParnerLogoContainer>
            <ParnerLogoContainer href="#!" alt="partners">
              <Img src={PartnersOne} alt="partners" />
            </ParnerLogoContainer>
          </Partners>
          <BinanceSection>
            <BinanceImgContainer>
              <Img src={Binance} alt="binace" />
            </BinanceImgContainer>
            <p>RealFevr is powered by Binance Smart Chain</p>
          </BinanceSection>
          <MiniFooter>
            <SocialLinks />
            <FooterLogoContainer>
              <Img src={Logo} alt="logo" />
            </FooterLogoContainer>
            <FooterPrivacy>
              <PrivacyList>
                <PrivacyListItem>privacy notice</PrivacyListItem>
                <PrivacyListItem>terms & conditions</PrivacyListItem>
                <PrivacyListItem>contacts</PrivacyListItem>
              </PrivacyList>
              <ul>
                <ReservedListItem>&copy; 2022 realfevr</ReservedListItem>
                <ReservedListItem>all rights reserved</ReservedListItem>
              </ul>
            </FooterPrivacy>
          </MiniFooter>
        </Container>
      </FooterWrapper>
    </FooterSection>
  )
}

export default Footer
