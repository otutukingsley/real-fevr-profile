import React from "react"
import {
  Filler,
  Progress,
  ProgressBarContainer,
  ProgressBgWrapper,
  FillerText,
} from "../styles/componentStyles/progressbar"

const ProgressBar = ({ done, claimed, progressText, width }) => {
  const handlePopup = (e) => {
    if (!done) {
      return
    } else {
      alert("claimed")
    }
  }
  return (
    <ProgressBarContainer claimed={claimed} done={done}>
      <ProgressBgWrapper>
        <Progress>
          <Filler
            width={`${width ? width : "100%"}`}
            className={done ? "done" : claimed ? "claimed" : ""}
          ></Filler>
          <FillerText
            done={done}
            claimed={claimed}
            width={width}
            onClick={(e) => handlePopup(e, done)}
            type="button"
          >
            {progressText}
          </FillerText>
        </Progress>
      </ProgressBgWrapper>
    </ProgressBarContainer>
  )
}

export default ProgressBar
