import styled, { createGlobalStyle } from "styled-components"

export const GlobalStyle = createGlobalStyle`

html,
body,
div,
span,
applet,
object,
iframe,
h1,
h2,
h3,
h4,
h5,
h6,
p,
blockquote,
pre,
a,
abbr,
acronym,
address,
big,
cite,
code,
del,
dfn,
em,
img,
ins,
kbd,
q,
s,
samp,
small,
strike,
strong,
sub,
sup,
tt,
var,
b,
u,
i,
center,
dl,
dt,
dd,
ol,
ul,
li,
fieldset,
form,
label,
legend,
table,
caption,
tbody,
tfoot,
thead,
tr,
th,
td,
article,
aside,
canvas,
details,
embed,
figure,
figcaption,
footer,
header,
hgroup,
menu,
nav,
output,
ruby,
section,
summary,
time,
mark,
audio,
video {
  margin: 0;
  padding: 0;
  border: 0;
  font-size: 100%;
  font: inherit;
  vertical-align: baseline;
}

article,
aside,
details,
figcaption,
figure,
footer,
header,
hgroup,
menu,
nav,
section {
  display: block;
}

ol,
ul {
  list-style: none;
}
blockquote,
q {
  quotes: none;
}
blockquote:before,
blockquote:after,
q:before,
q:after {
  content: "";
  content: none;
}
table {
  border-spacing: 0;
}

input,
input:before,
input:after {
  -webkit-user-select: initial;
  -khtml-user-select: initial;
  -moz-user-select: initial;
  -ms-user-select: initial;
  user-select: initial;
  -webkit-appearance: none;
  border-radius: 0;
}


#root {
  height: -webkit-fill-available;
}

html{
  scroll-behaviour: smooth;
  height: 100%;
}

*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: none;
}

body{
  font-family: Azo Md;
  line-height: 1;
  overflow-x: hidden;
  scrollbar-gutter: stable;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  background-color: ${({ theme }) => theme.colors.black};
  color: ${({ theme }) => theme.colors.white};
}

a{
  text-decoration: none;
}
::selection {
  background: rgba(48, 224, 111, 0.5);
  color: #fff;
}
`
export const Container = styled.div`
  display: block;
  margin: 0 auto;
  max-width: 87.5rem !important;
  position: relative;
`

export const FlexRowContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: ${({ justify }) => (justify ? justify : "stretch")};
  grid-gap: ${({ gap }) => (gap ? gap : "")};
`

export const FlexColContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: ${({ justify }) => (justify ? justify : "stretch")};
  grid-gap: ${({ gap }) => (gap ? gap : "")};
`

export const Pg = styled.p`
  font-size: inherit;
`
export const Img = styled.img`
  width: 100%;
  height: 100%;
  display: block;
  object-fit: ${({ fit }) => (fit ? fit : "contain")};
`

export const CustomLink = styled.a`
  margin-top: 0;
  margin-bottom: 0;
  text-decoration: none;
`
