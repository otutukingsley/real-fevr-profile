import React from "react"
import { ShowcaseMain } from "../../styles/componentStyles/showcase"
import TopNav from "../navigation/TopNav"
import Navbar from "../navigation/Navbar"
import Profile from "./Profile"
import { useViewPort } from "../../hooks/viewport"

const Showcase = () => {
  const { width } = useViewPort()
  const breakPoint = 1065

  return (
    <ShowcaseMain>
      {width > breakPoint ? (
        <>
          <TopNav />
          <Navbar />
        </>
      ) : (
        ""
      )}
      <Profile />
    </ShowcaseMain>
  )
}

export default Showcase
