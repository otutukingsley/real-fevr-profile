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
          <Img src={Avatar} alt="user" fit="cover" />
        </DropdownAvatarContainer>
        <div>
          <p>CryptoWi...</p>
        </div>
        <div className="icon">
          <Img src={Arrow} alt="arrow" fit="cover" />
        </div>
      </FlexRowContainer>
    </CustomDropdown>
  )
}

export default Dropdown
