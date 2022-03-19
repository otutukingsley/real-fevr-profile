import React from "react"
import {
  AchievementItems,
  AchievementTabs,
  AchievementTop,
} from "../../styles/componentStyles/achievement"

const AchievementNav = () => {
  return (
    <AchievementTop>
      <AchievementItems>
        <AchievementTabs className="inactive">collection</AchievementTabs>
      </AchievementItems>
      <AchievementItems>
        <AchievementTabs className="inactive">transactions</AchievementTabs>
      </AchievementItems>
      <AchievementItems>
        <AchievementTabs className="active">achievements</AchievementTabs>
      </AchievementItems>
      <AchievementItems>
        <AchievementTabs className="inactive">rewards</AchievementTabs>
      </AchievementItems>
      <AchievementItems>
        <AchievementTabs className="inactive">notifications</AchievementTabs>
      </AchievementItems>
    </AchievementTop>
  )
}

export default AchievementNav
