import styled from "styled-components"
import { DropdownAvatarContainer } from "../componentStyles/dropdown"

export const ProfileSection = styled.section`
  width: 100%;
  padding: 1rem 1.5rem 0rem 1.5rem;
  display: block;
  position: relative;
  z-index: 1000;
  position: relative;

  .profile-abs {
    position: absolute;
    right: 0;
    top: 0;
  }
`

export const ProfileAvatarContainer = styled(DropdownAvatarContainer)`
  width: 12.5rem;
  height: 12.5rem;
  border: 6px solid ${({ theme }) => theme.colors.white};
`

export const ProfileAvatarWrapper = styled.div`
  width: 100%;
  margin-bottom: 0.938rem;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`
export const ProfileTag = styled.p`
  position: absolute;
  color: ${({ theme }) => theme.colors.black};
  bottom: 0;
  left: 50%;
  transform: translateX(-50%) !important;
  z-index: 100;
  background: linear-gradient(178.9deg, #ffffff 31.24%, #74857a 182.59%);
  box-shadow: 0px 10px 20px rgba(29, 53, 117, 0.3);
  border-radius: 30px;
  padding: 0.538rem 1rem 0.338rem 1rem;
  text-transform: uppercase;
`
export const ProfileInfo = styled.div`
  width: 100%;
  margin-bottom: 0.938rem;
  text-align: center;
  position: relative;
  display: block;
`

export const LevelsInfo = styled(ProfileInfo)`
  width: 100%;
  margin-bottom: 2.063rem;
  text-align: center;
  text-transform: uppercase;
`
export const UserName = styled.h2`
  text-shadow: 0px 10px 20px rgba(29, 53, 117, 0.5);
  font-weight: bold;
  margin-bottom: 0.35rem;
  font-size: 2.188rem;
  background: linear-gradient(178.9deg, #ffffff 31.24%, #74857a 182.59%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
`

export const MoreArrow = styled.div`
  margin-top: -0.5rem;
  padding: 0;
  height: 100%;
`

export const LinkId = styled.a`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  grid-gap: 0.644rem;
  padding: 0;
  background: linear-gradient(
    178.9deg,
    ${({ theme }) => theme.colors.green} 31.24%,
    #74857a 182.59%
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;

  &:hover ${MoreArrow} {
    transition: ${({ theme }) => theme.transitions.all};
    transform: scale(1.1);
  }
`
export const OwnStake = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  grid-gap: 1rem;
  margin: 0.938rem 0;
  text-transform: uppercase;
  font-size: 0.85rem;
`
export const WalletId = styled.p`
  margin: 0;
  padding: 0;
  font-weight: bold;
  letter-spacing: 0.2em;
  font-size: 13px;
`

export const StakedContainer = styled.div`
  width: 1rem;
  height: 1rem;
  display: block;
`
export const OwnValue = styled.p`
  font-family: Azo Black;
  font-weight: bold;
  background: linear-gradient(178.9deg, #ffffff 31.24%, #74857a 182.59%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-transform: uppercase;
  letter-spacing: 0.2em;

  span {
    font-family: Azo Md;
    font-weight: normal;
  }
`
export const Joined = styled.p`
  opacity: 0.6;
  text-transform: uppercase;
  font-size: 0.625rem;
  letter-spacing: 0.2em;
`
export const RankList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.563rem;
  grid-gap: 0.833rem;
`

export const RankImgContainer = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  display: block;
`
export const RankListItem = styled.li`
  display: block;
  width: auto;
`
export const RankNumbersList = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  grid-gap: 30px;
`
export const RankNumbersListItem = styled.li`
  text-align: center;
  display: block;
  position: relative;
  width: auto;
  padding-right: 30px;

  h3 {
    font-size: 20px;
    background: linear-gradient(141.32deg, #30e06f 4.58%, #118139 122.96%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
    text-shadow: 0px 10px 20px rgba(29, 53, 117, 0.5);
    font-weight: bold;
    text-transform: capitalize;
    margin-bottom: 5px;

    span {
      font-size: 14px;
    }
  }

  p {
    font-size: 11px;
    text-transform: uppercase;
    line-height: 1.1;
    font-weight: 700;
    line-height: 13px;
    text-align: center;
    letter-spacing: 0.2em;
    text-transform: uppercase;
    background: linear-gradient(178.9deg, #ffffff 31.24%, #74857a 182.59%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-fill-color: transparent;
  }

  &::after {
    content: "";
    position: absolute;
    display: inlin-block;
    right: 0;
    top: 0;
    height: 50px;
    width: 0px;
    border: 1px solid rgba(48, 224, 111, 0.7);
    box-sizing: border-box;
    box-shadow: 0px 4px 4px #30e06f, 0px 3px 10px #30e06f;
    background: rgba(255, 255, 255, 0.7);
  }

  &:last-child {
    padding-right: 0;
    ::after {
      display: none;
    }
  }
`
