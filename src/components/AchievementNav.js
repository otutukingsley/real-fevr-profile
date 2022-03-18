import React from "react"
import {
  AchievementItems,
  AchievementTabs,
  AchievementTop,
} from "../styles/componentStyles/achievement"

const AchievementNav = () => {
  return (
    <AchievementTop>
      <AchievementItems>
        <AchievementTabs>collection</AchievementTabs>
      </AchievementItems>
      <AchievementItems>
        <AchievementTabs>transactions</AchievementTabs>
      </AchievementItems>
      <AchievementItems>
        <AchievementTabs className="active">achievements</AchievementTabs>
      </AchievementItems>
      <AchievementItems>
        <AchievementTabs>rewards</AchievementTabs>
      </AchievementItems>
      <AchievementItems>
        <AchievementTabs>notifications</AchievementTabs>
      </AchievementItems>
    </AchievementTop>
  )
}

export default AchievementNav
