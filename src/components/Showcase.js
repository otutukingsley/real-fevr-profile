import React from "react"
import { Container } from "../styles/globalStyles"
import { ShowcaseMain } from "../styles/componentStyles/showcase"
import TopNav from "./TopNav"
import Navbar from "./Navbar"

const Showcase = () => {
  return (
    <ShowcaseMain>
      <TopNav />
      <Navbar />
      <Container>showcase</Container>
    </ShowcaseMain>
  )
}

export default Showcase
