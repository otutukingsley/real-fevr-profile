import React, { useContext } from "react"
import Achievement from "../components/achievement/Achievement"
import Footer from "../components/Footer"
import MobileNav from "../components/navigation/MobileNav"
import Popup from "../components/Popup"
import Showcase from "../components/showcase/Showcase"
import { popupContext } from "../context/PopupState"
import { useViewPort } from "../hooks/viewport"

const Home = () => {
  const context = useContext(popupContext)
  const { show, menu } = context
  const { width } = useViewPort()
  const breakPoint = 1065
  return (
    <>
      <Showcase />
      <Achievement />
      <Footer />
      {show && <Popup />}
      {menu && width < breakPoint && <MobileNav />}
    </>
  )
}

export default Home
