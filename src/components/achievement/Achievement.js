import React from "react"
import {
  AchievementMain,
  AchievementSection,
  AchievementTopContainer,
  GridItemImgContainer,
  GridItems,
  NftGrid,
  NftTextContainer,
  Powerup,
  PowerupNumber,
  PowerupText,
} from "../../styles/componentStyles/achievement"
import ProgressBar from "../ProgressBar"
import { Container, FlexRowContainer, Img } from "../../styles/globalStyles"
import AchievementNav from "./AchievementNav"
import DiamondHalf from "../../assets/images/extras/diamond-half.svg"
import DiamondFull from "../../assets/images/extras/diamond-full.svg"
import Cube from "../../assets/images/extras/collectible.png"

const Achievement = () => {
  return (
    <AchievementSection>
      <AchievementTopContainer>
        <Container>
          <AchievementNav />
        </Container>
      </AchievementTopContainer>
      <AchievementMain>
        <Container>
          <NftGrid>
            <GridItems>
              <FlexRowContainer gap="1.26rem">
                <GridItemImgContainer>
                  <Img src={DiamondHalf} alt="NFT" width="60px" />
                </GridItemImgContainer>
                <NftTextContainer>
                  <div>
                    <h3>NFT Collector</h3>
                    <span>Level 1</span>
                  </div>
                  <p>Collect a total of 25 NFTs in your walled (minted)</p>
                </NftTextContainer>
              </FlexRowContainer>
              <ProgressBar progressText="7 / 25" width="28%" />
              <Powerup>
                <PowerupNumber>150XP</PowerupNumber>
              </Powerup>
            </GridItems>
            <GridItems>
              <FlexRowContainer gap="1.26rem">
                <GridItemImgContainer>
                  <Img src={Cube} alt="NFT" width="60px" />
                </GridItemImgContainer>
                <NftTextContainer>
                  <div>
                    <h3>NFT Collector</h3>
                    <span>Level 1</span>
                  </div>
                  <p>Collect a total of 25 NFTs in your walled (minted)</p>
                </NftTextContainer>
              </FlexRowContainer>
              <ProgressBar progressText="1122 / 2000" width="56.1%" />
              <Powerup>
                <PowerupText>Legend Iker Casillas collectible</PowerupText>
              </Powerup>
            </GridItems>
            <GridItems>
              <FlexRowContainer gap="1.26rem">
                <GridItemImgContainer>
                  <Img src={DiamondFull} alt="NFT" width="60px" />
                </GridItemImgContainer>
                <NftTextContainer>
                  <div>
                    <h3>NFT Collector</h3>
                    <span>Level 1</span>
                  </div>
                  <p>Collect a total of 25 NFTs in your walled (minted)</p>
                </NftTextContainer>
              </FlexRowContainer>
              <ProgressBar progressText="click to claim reward" done={true} />
              <Powerup>
                <PowerupNumber>150XP</PowerupNumber>
              </Powerup>
            </GridItems>
            <GridItems>
              <FlexRowContainer gap="1.26rem">
                <GridItemImgContainer>
                  <Img src={DiamondFull} alt="NFT" width="60px" />
                </GridItemImgContainer>
                <NftTextContainer>
                  <div>
                    <h3>Trade Master</h3>
                    <span>Level 2</span>
                  </div>
                  <p>
                    Make $2000 selling and buying Moments in the marketplace
                  </p>
                </NftTextContainer>
              </FlexRowContainer>
              <ProgressBar progressText="complete & claimed" claimed={true} />
              <Powerup>
                <PowerupNumber>150XP</PowerupNumber>
              </Powerup>
            </GridItems>
          </NftGrid>
        </Container>
      </AchievementMain>
    </AchievementSection>
  )
}

export default Achievement
