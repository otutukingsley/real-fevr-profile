import React from "react"
import { CustomBtn } from "../styles/componentStyles/button"
import { FlexRowContainer } from "../styles/globalStyles"

export const Button = ({ name, img, green, opacity, fontFamily }) => {
  return (
    <CustomBtn green={green} opacity={opacity} fontFamily={fontFamily}>
      <FlexRowContainer gap="0.51rem">
        {" "}
        <p>{name}</p>
        {img && (
          <span>
            <img src={img} alt="button" />
          </span>
        )}
      </FlexRowContainer>
    </CustomBtn>
  )
}
