import React, { useContext } from "react"
import Achievement from "../components/Achievement"
import Popup from "../components/Popup"
import Showcase from "../components/Showcase"
import { popupContext } from "../context/PopupState"

const Home = () => {
  const context = useContext(popupContext)
  const { show } = context
  return (
    <>
      <Showcase />
      <Achievement />
      {show && <Popup />}
    </>
  )
}

export default Home
