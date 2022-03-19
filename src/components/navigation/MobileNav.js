import React, { useEffect, useContext, useRef } from "react"
import {
  MobileListItem,
  MobileNavBg,
  MobileNavWrapper,
} from "../../styles/componentStyles/popup"
import { popupContext } from "../../context/PopupState"
import SocialLinks from "../SocialLinks"
import { OrdinaryLink } from "../../styles/globalStyles"
import { CustomBtnLink } from "../../styles/componentStyles/button"
import Soccer from "../../assets/images/extras/football.svg"

const MobileNav = () => {
  const context = useContext(popupContext)
  const { handleMenu, menu } = context
  const menuRef = useRef(null)

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
      <MobileNavWrapper menu={menu}>
        <ul>
          <MobileListItem>
            <OrdinaryLink href="#!">Packs</OrdinaryLink>
          </MobileListItem>
          <MobileListItem>
            <OrdinaryLink href="#!">Marketplace</OrdinaryLink>
          </MobileListItem>
          <MobileListItem>
            <OrdinaryLink href="#!">Challenges</OrdinaryLink>
          </MobileListItem>
          <MobileListItem>
            <OrdinaryLink href="#!">$FEVR</OrdinaryLink>
          </MobileListItem>
          <MobileListItem>
            <OrdinaryLink href="#!">learn</OrdinaryLink>
          </MobileListItem>
          <MobileListItem>
            <OrdinaryLink href="#!">staking</OrdinaryLink>
          </MobileListItem>
          <MobileListItem>
            <CustomBtnLink className="btn-green btn-xs">Settings</CustomBtnLink>
          </MobileListItem>
          <MobileListItem>
            <CustomBtnLink className="btn-white btn-xs">
              view profile
            </CustomBtnLink>
          </MobileListItem>
          <MobileListItem>
            <CustomBtnLink className="btn-light btn-sm">
              <span>Play Fantasy</span>
              <span>
                <img src={Soccer} alt="button" />
              </span>
            </CustomBtnLink>
          </MobileListItem>
          <MobileListItem>
            <SocialLinks />
          </MobileListItem>
        </ul>
      </MobileNavWrapper>
    </MobileNavBg>
  )
}

export default MobileNav
