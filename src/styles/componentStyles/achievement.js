import styled from "styled-components"

export const AchievementSection = styled.section`
  width: 100%;
  color: ${({ theme }) => theme.colors.white};
  display: block;
  margin: 0;
`

export const AchievementMain = styled.main`
  width: 100%;
  padding: 5rem 1.5rem 12.125rem 1.5rem;
  display: block;
  position: relative;
  margin: 0;
  text-align: left;
`

export const AchievementTopContainer = styled.div`
  width: 100%;
  display: block;
  background: rgba(0, 0, 0, 0.15);
  border-bottom: 1px solid rgba(255, 255, 255, 0.25);
  padding: 0.938rem 1.5rem 0 1.5rem;
  margin: 0;
`
export const AchievementTop = styled.ul`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  grid-gap: 2.5rem;
`

export const AchievementTabs = styled.button`
  border: none;
  text-align: center;
  background-color: transparent;
  outline: none;
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  font-weight: 900;
  font-size: 17px;
  letter-spacing: 0.2em;
  cursor: pointer;
  line-height: 100%;
  opacity: 0.7;
  padding-bottom: 0.938rem;
`
export const AchievementItems = styled.li`
  width: auto;
  color: ${({ theme }) => theme.colors.white};
  display: block;
  cursor: pointer;
  position: relative;

  &:hover ${AchievementTabs} {
    opacity: 1;
  }

  .active {
    opacity: 1;
    font-family: Azo Black;
    &:after {
      content: "";
      position: absolute;
      bottom: 0;
      display: block;
      width: 100%;
      height: 2px;
      background: linear-gradient(178.9deg, #ffffff 31.24%, #74857a 182.59%);
      box-shadow: 3px 7px 15px rgba(13, 21, 62, 0.4);
    }
  }
`

export const NftGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
  grid-gap: 10rem;
  width: 100%;
`
export const GridItems = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  .collection-bar {
    margin-bottom: 30px;
  }
`
export const GridItemImgContainer = styled.div`
  display: block;
  margin: 0;
`
export const NftTextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;

  h3 {
    display: inline-block;
    background: linear-gradient(141.32deg, #30e06f 4.58%, #118139 122.96%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
    text-shadow: 0px 10px 20px rgba(29, 53, 117, 0.5);
    font-size: 30px;
    font-family: Azo Black;
    margin-bottom: 0.563rem;
    margin-right: 0.6rem;
  }

  span {
    text-transform: uppercase;
    font-size: 11px;
    letter-spacing: 0.2em;
  }
`
