import React from "react"
import {
  TopNavSocials,
  TopNavSocialsItem,
  TopNavSocialsItemLink,
} from "../styles/componentStyles/navigation"
import { Img } from "../styles/globalStyles"
import Telegram from "../assets/images/socials/telegram.svg"
import Facebook from "../assets/images/socials/facebook.svg"
import Twitter from "../assets/images/socials/twitter.svg"
import Linkedin from "../assets/images/socials/linkedin.svg"
import Instagram from "../assets/images/socials/instagram.svg"
import Youtube from "../assets/images/socials/youtube.svg"

const SocialLinks = () => {
  return (
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
  )
}

export default SocialLinks
