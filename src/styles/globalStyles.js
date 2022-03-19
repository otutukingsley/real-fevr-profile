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

  .btn-light {
    color: ${({ theme }) => theme.colors.btnlight};
    background: linear-gradient(169.98deg, #ffffff 33.75%, #6a84cb 184.73%);
    box-shadow: 0px 10px 20px rgba(29, 53, 117, 0.3);

    &:hover {
      background: linear-gradient(169.98deg, #ffffff 33.75%, #6a84cb 110%);
    }
  }

  .btn-green {
    color: ${({ theme }) => theme.colors.white};
    background: linear-gradient(141.32deg, #30e06f 4.58%, #118139 122.96%);
    box-shadow: 0px 10px 20px rgba(29, 53, 117, 0.3);

    &:hover {
      background: linear-gradient(169.98deg, #30E06F 33.75%, #118139 110%);
    }
  }
  .btn-white {
    color: ${({ theme }) => theme.colors.black};
    background: linear-gradient(178.9deg, #ffffff 31.24%, #74857a 182.59%);
    box-shadow: 0px 10px 20px rgba(29, 53, 117, 0.3);
    &:hover{
      background: linear-gradient(169.98deg, #ffffff 33.75%, #74857a 110%);
    }
  }

  .btn-xs {
    font-size: clamp(0.6rem, 2.5vw, 0.688rem);
    padding: 0.625rem 0.938rem;
  }

  .btn-sm {
    font-size: clamp(0.73rem, 2.5vw, 0.813rem);
    padding: 0.625rem 0.75rem 0.438rem;
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
  align-items: ${({ align }) => (align ? align : "center")};
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

export const P = styled.p`
  font-size: inherit;
  font-family: Azo Black;
`
export const Img = styled.img`
  width: ${({ width }) => (width ? width : "100%")};
  height: 100%;
  display: block;
  object-fit: ${({ fit }) => (fit ? fit : "contain")};
`

export const CustomLink = styled.a`
  margin-top: 0;
  margin-bottom: 0;
  text-decoration: none;
`

export const OrdinaryLink = styled(CustomLink)`
  font-weight: ${({ bold }) => (bold ? "900" : "normal")};
  color: ${({ theme }) => theme.colors.white};
  text-transform: uppercase;
  font-family: ${({ bold }) => (bold ? "Azo Black" : "Azo Md")};
  font-size: clamp(0.7rem, 2.5vw, 0.875rem);
  .soon {
    font-weight: 300;
    font-family: Azo Sans;
  }

  &:hover {
    color: ${({ theme, disabled }) =>
      !disabled ? theme.colors.green : "inherit"};
  }
`
