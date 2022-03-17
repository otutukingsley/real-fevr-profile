import React from "react"
import { Container } from "../styles/globalStyles"
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
      <Container>ACHIEVEMENT SECTION</Container>
    </ShowcaseMain>
  )
}

export default Showcase
