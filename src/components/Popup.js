import React, { useContext, useRef, useEffect } from "react"
import {
  CloseBtn,
  CloseBtnContainer,
  Congratulations,
  PopupBg,
  PopupWrapper,
} from "../styles/componentStyles/popup"
import { popupContext } from "../context/PopupState"
import Close from "../assets/images/extras/close.svg"
import { Img } from "../styles/globalStyles"

const Popup = () => {
  const context = useContext(popupContext)
  const { handlePopup, show } = context
  const popupRef = useRef(null)

  useEffect(() => {
    /* Disables or Enables window scrolling dependent on the popup SHOW state in the useEffect dependency array */
    if (show) {
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [show])

  /* Handles the hiding or closing the Popup */
  const handleDismiss = (e) => {
    if (popupRef.current === e.target) {
      handlePopup()
    }
  }

  return (
    <PopupBg onClick={handleDismiss} ref={popupRef}>
      <PopupWrapper>
        <CloseBtnContainer>
          <CloseBtn onClick={() => handlePopup()} rotate>
            <Img src={Close} alt="close" />
          </CloseBtn>
        </CloseBtnContainer>
        <Congratulations>Congratulations!</Congratulations>
      </PopupWrapper>
    </PopupBg>
  )
}

export default Popup
