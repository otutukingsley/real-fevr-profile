import React, { useEffect, useContext, useRef } from "react"
import {
  MobileNavBg,
  MobileNavWrapper,
} from "../../styles/componentStyles/popup"
import { popupContext } from "../../context/PopupState"
import { useViewPort } from "../../hooks/viewport"

const MobileNav = () => {
  const context = useContext(popupContext)
  const { handleMenu, menu } = context
  const menuRef = useRef(null)
  const { width } = useViewPort()
  const breakPoint = 1065

  useEffect(() => {
    if (menu) {
      document.body.style.overflow = "hidden"
    }
    return () => {
      document.body.style.overflow = "unset"
    }
  }, [menu])

  const handleDismiss = (e) => {
    if (menuRef.current === e.target) {
      handleMenu()
    }
  }

  return (
    <MobileNavBg onClick={handleDismiss} ref={menuRef}>
      <MobileNavWrapper menu={menu}>nav</MobileNavWrapper>
    </MobileNavBg>
  )
}

export default MobileNav
