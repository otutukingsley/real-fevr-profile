import React from "react"
import {
  LinkId,
  MoreArrow,
  OwnStake,
  ProfileAvatarContainer,
  ProfileAvatarWrapper,
  ProfileInfo,
  ProfileSection,
  ProfileTag,
  StakedContainer,
  UserName,
  WalletId,
  OwnValue,
  Joined,
  LevelsInfo,
  RankList,
  RankImgContainer,
  RankListItem,
  RankNumbersList,
  RankNumbersListItem,
} from "../styles/componentStyles/profile"
import {
  Container,
  FlexColContainer,
  FlexRowContainer,
  Img,
} from "../styles/globalStyles"
import Avatar from "../assets/images/extras/avatar.png"
import ArrowMore from "../assets/images/extras/expand.svg"
import PurpleLogo from "../assets/images/realfevr/fevr-purple-logo.png"
import Cup from "../assets/images/extras/cup.png"
import One from "../assets/images/extras/one.png"
import Star from "../assets/images/extras/star.png"
import { Button } from "./Buttons"

const Profile = () => {
  return (
    <ProfileSection>
      <Container>
        <FlexColContainer justify="center">
          <ProfileAvatarWrapper>
            <ProfileAvatarContainer>
              <Img src={Avatar} alt="user" />
            </ProfileAvatarContainer>
            <ProfileTag>Level 42</ProfileTag>
          </ProfileAvatarWrapper>
          <ProfileInfo>
            <UserName>@CryptoWizard</UserName>
            <LinkId href="#!">
              <WalletId>0x88...87E005DAd5</WalletId>
              <MoreArrow className="img-container">
                <Img src={ArrowMore} alt="more" />
              </MoreArrow>
            </LinkId>
            <OwnStake className="owned-staked">
              <FlexRowContainer gap="0.5rem">
                <StakedContainer>
                  <Img src={PurpleLogo} alt="fevr" />
                </StakedContainer>
                <OwnValue>
                  127,812,000 <span>owned</span>
                </OwnValue>
              </FlexRowContainer>
              <FlexRowContainer gap="0.5rem">
                <StakedContainer>
                  <Img src={PurpleLogo} alt="fevr" />
                </StakedContainer>
                <OwnValue>
                  127,812,000 <span>staked</span>
                </OwnValue>
              </FlexRowContainer>
            </OwnStake>
            <Joined>Joined october, 2021</Joined>
          </ProfileInfo>
          <LevelsInfo>
            <RankList>
              <RankListItem>
                <RankImgContainer>
                  <Img src={Star} alt="Ranks" />
                </RankImgContainer>
              </RankListItem>
              <RankListItem>
                <RankImgContainer className="img-container">
                  <Img src={Cup} alt="Ranks" />
                </RankImgContainer>
              </RankListItem>
              <RankListItem>
                <RankImgContainer className="img-container">
                  <Img src={One} alt="Ranks" />
                </RankImgContainer>
              </RankListItem>
            </RankList>
            <RankNumbersList>
              <RankNumbersListItem>
                <h3>
                  133 / 27500 <span>XP</span>
                </h3>
                <p>Next level</p>
              </RankNumbersListItem>
              <RankNumbersListItem>
                <h3>2346</h3>
                <p>moments</p>
                <p>owned</p>
              </RankNumbersListItem>
              <RankNumbersListItem>
                <h3>Top 1%</h3>
                <p>rank</p>
              </RankNumbersListItem>
            </RankNumbersList>
          </LevelsInfo>
        </FlexColContainer>
        <div className="profile-abs">
          <FlexRowContainer gap="0.85rem">
            <Button
              name="Settings"
              green={"true"}
              opacity={"false"}
              fontFamily="Azo Black"
            />
            <Button name="View Profile" green={false} opacity={"false"} />
          </FlexRowContainer>
        </div>
      </Container>
    </ProfileSection>
  )
}

export default Profile
