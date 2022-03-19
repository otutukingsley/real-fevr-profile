import styled from "styled-components"

export const FooterSection = styled.footer`
  width: 100%;
  // border: 2px solid red;
  position: relative;
  &:after {
    content: "";
    width: 100%;
    height: 100%;
    position: absolute;
    bottom: 0;
    background: radial-gradient(
      133.75% 133.75% at 50% 104.01%,
      rgba(48, 224, 111, 0.6) 0%,
      rgba(38, 175, 87, 0.46875) 0%,
      rgba(0, 0, 0, 0) 60%
    );
    z-index: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-items: center;
  }
`
export const FooterWrapper = styled.div`
  position: relative;
  // border: 2px solid green;
  display: block;
  z-index: 100;
  width: 100%;
  padding: 5.625rem 1.5rem 3.125rem 1.5rem;
`
export const PartnerHeading = styled.div`
  display: block;
  width: 100%;
  margin-bottom: 2.306rem;
  text-align: center;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`
export const Partnerh5 = styled.h5`
  font-family: Azo Black;
  font-weight: 900;
  font-size: 18px;
  text-align: center;
  letter-spacing: 0.2em;
  text-transform: uppercase;
`

export const Partners = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  flex-wrap: wrap;
  justify-content: center;
  row-gap: 2rem;
  column-gap: 4rem;
`
export const ParnerLogoContainer = styled.a`
  width: 100px;
  height: auto;
  display: block;
`
export const BinanceSection = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding-top: 6.25rem;
  width: 100%;
  text-align: center;
`
export const BinanceImgContainer = styled.div`
  width: auto;
  height: auto;
  display: block;
  margin-bottom: 1.25rem;
`
export const BinanceQuote = styled.p`
  font-size: clamp(0.8rem, 2.5vw, 1.125rem);
  opacity: 0.8;
`
export const MiniFooter = styled.div`
  padding-top: 6.25rem;
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  text-align: center;

  @media (max-width: 990px) {
    flex-direction: column;
    grid-gap: 2rem;
  }
`
export const FooterLogoContainer = styled.div`
  width: 200px;
  height: 100%;
  display: flex;
`
export const FooterPrivacy = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-items: space-between;

  @media (max-width: 990px) {
    align-items: center;
  }
`
export const PrivacyList = styled.ul`
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: center;
  grid-gap: 1rem;
  margin-bottom: 0.563rem;
  @media (max-width: 990px) {
    flex-wrap: wrap;
  }
`
export const PrivacyListItem = styled.li`
  font-weight: 400;
  font-size: 10px;
  text-align: right;
  letter-spacing: 0.02em;
  text-transform: uppercase;
`
export const ReservedListItem = styled(PrivacyListItem)`
  display: inline-block;
  color: #fff;

  &::after {
    content: "";
    width: 2px;
    height: 2px;
    border-radius: 3px;
    background-color: #fff;
    display: inline-block;
    margin: 2px 10px;
  }

  &:last-child::after {
    display: none;
  }
`
