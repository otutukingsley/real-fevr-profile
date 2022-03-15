import { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`
html{
  scroll-behaviour: smooth;
}
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
body{
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a{
  text-decoration: none;
}
ul{
  list-style:none;
}
`
