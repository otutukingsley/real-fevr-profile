import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
#root {
  height: -webkit-fill-available;
}

html{
  scroll-behaviour: smooth;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}

body{
  font-family: Azo Md;
  overflow-x: hidden;
  scrollbar-gutter: stable;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
}

div{
  margin:0;
  padding:0;
}

a{
  text-decoration: none;
  margin-top: 0;
  margin-bottom: 0;
  padding: 0;
}
ul,
ol{
  list-style:none;
}
`
export const Container = styled.div`
  display: block;
  margin: 0 auto;
  max-width: 87.5rem !important;
`

export const FlexRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  grid-gap: ${({ gap }) => (gap ? gap : "")};
`

export const Pg = styled.p`
  font-size: inherit;
`
export const Img = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: contain;
`

export const CustomLink = styled.a`
  margin-top: 0;
  margin-bottom: 0;
  text-decoration: none;
`
