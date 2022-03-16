import React from "react"
import { CustomBtn } from "../styles/componentStyles/button"
import { FlexRowContainer } from "../styles/globalStyles"

export const Button = ({ name, img, color, background }) => {
  return (
    <CustomBtn color={color} background={background}>
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
