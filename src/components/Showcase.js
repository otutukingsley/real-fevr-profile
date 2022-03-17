import React from "react"
import { ShowcaseMain } from "../styles/componentStyles/showcase"
import TopNav from "./TopNav"
import Navbar from "./Navbar"
import Profile from "./Profile"

const Showcase = () => {
  return (
    <ShowcaseMain>
      <TopNav />
      <Navbar />
      <Profile />
    </ShowcaseMain>
  )
}

export default Showcase
