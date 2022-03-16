import React from "react"
import Avatar from "../assets/images/extras/avatar.png"
import Arrow from "../assets/images/extras/arrow.svg"
import {
  CustomDropdown,
  DropdownAvatarContainer,
} from "../styles/componentStyles/dropdown"
import { FlexRowContainer, Img } from "../styles/globalStyles"

const Dropdown = () => {
  return (
    <CustomDropdown>
      <FlexRowContainer gap="0.5rem">
        <DropdownAvatarContainer className="img-container">
          <Img src={Avatar} alt="user" />
        </DropdownAvatarContainer>
        <div>
          <p>CryptoWi...</p>
        </div>
        <div className="icon">
          <Img src={Arrow} alt="arrow" />
        </div>
      </FlexRowContainer>
    </CustomDropdown>
  )
}

export default Dropdown
