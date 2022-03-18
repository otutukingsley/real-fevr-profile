import styled, { keyframes, css } from "styled-components"

export const moveHorizontally = (width) => keyframes`
  0% {
    width: 0;
  }
  100% {
    width: ${width};
  }
`

export const ProgressBarContainer = styled.div`
  width: 100%;
  display: block;
  margin: 1.375rem 0 0.625rem 0;
`

export const ProgressBgWrapper = styled.div`
  background: rgba(196, 196, 196, 0.01);
  justify-content: flex-start;
  border-radius: 400px;
  align-items: center;
  position: relative;
  padding: 8px;
  display: flex;
  height: 50px;
  width: 100%;
  box-shadow: inset 0px 19.8066px 28.4403px -18.283px rgba(255, 255, 255, 0.5),
    inset 0px 3.55503px 5.58648px -2.03145px #ffffff,
    inset 0px -41.6447px 34.5346px -32.5032px rgba(96, 68, 145, 0.3),
    inset 0px 49.7704px 50.7862px -24.3774px rgba(202, 172, 255, 0.3),
    inset 0px 2.03145px 9.14151px rgba(154, 146, 210, 0.3),
    inset 0px 0.507862px 20.3145px rgba(227, 222, 255, 0.2);
  backdrop-filter: blur(50.7862px);
`

export const Progress = styled.div`
  padding: 5px 0;
  width: 100%;
  height: 100%;
  border-radius: 400px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  background: linear-gradient(180deg, #ffffff52 0%, rgba(0, 0, 0, 0) 100%);
  box-shadow: inset 0px 19.8066px 28.4403px -18.283px rgb(255 255 255 / 22%),
    inset 0px 3.55503px 5.58648px -2.03145px #ffffff2b,
    inset 0px -41.6447px 34.5346px -32.5032px rgb(96 68 145 / 30%),
    inset 0px 49.7704px 50.7862px -24.3774px rgb(202 172 255 / 30%),
    inset 0px 2.03145px 9.14151px rgb(154 146 210 / 30%),
    inset 0px 0.507862px 20.3145px rgb(227 222 255 / 20%);
  backdrop-filter: blur(50.7862px);

  .done {
    background: linear-gradient(119.91deg, #e76af7 -18.1%, #a034ae 82.06%);
    box-shadow: 0px 10px 50px rgba(189, 57, 251, 0.5), 0px -5px 50px #a639fb,
      0px 0px 20px #5a2361, inset 0px -10px 20px #581361;
  }

  .claimed {
    background: linear-gradient(141.32deg, #30e06f 4.58%, #118139 122.96%);
    box-shadow: 0px -5px 50px #30e06f, inset 0px -10px 20px #11915a;
  }
`

export const Filler = styled.div`
  left: 0;
  position: absolute;
  animation: ${({ width }) => moveHorizontally(width)} 5s normal forwards;
  -webkit-animation: ${({ width }) => moveHorizontally(width)} 5s normal
    forwards;
  box-shadow: 0px 0px 18.9113px #30e06f, 0px 0px 73.2115px #30e06f,
    inset 0px 0px 7.32115px rgba(49, 255, 156, 0.5);
  border-radius: 400px;
  background: #fff;
  height: 100%;
  width: 0;
  background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0.8),
      rgba(255, 255, 255, 0.8)
    ),
    linear-gradient(180deg, #ffffff 0%, rgba(255, 255, 255, 0) 100%);
  filter: blur(1.35px);
`

export const FillerText = styled.button`
  color: ${({ done, claimed, theme }) =>
    done || claimed ? theme.colors.white : "rgb(67, 67, 67)"};
  background: transparent;
  padding: 0;
  margin: 0;
  border: none;
  outline: none;
  text-align: center;
  width: 100%;
  position: absolute;
  height: 100%;
  border-radius: 400px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-transform: uppercase;
  text-shadow: 0px 1px 2px rgba(0, 0, 0, 0.25);
  letter-spacing: 0.1em;
  font-size: 13px;
  font-weight: 900;
  font-family: Azo Black;
  cursor: ${({ done }) => (done ? "pointer" : "default")};

  &:hover {
    ${({ done }) =>
      done &&
      css`
        background: linear-gradient(
          80deg,
          rgb(231, 106, 247) 16%,
          rgb(160, 52, 174) 100%
        );
        box-shadow: rgb(189 57 251 / 50%) 0px 10px 20px,
          rgb(166 57 251) 0px -5px 20px, rgb(90 35 97) 0px 0px 20px,
          rgb(88 19 97) 0px -10px 20px inset;

        color: ${({ theme }) => theme.colors.green};
      `}
  }
`
