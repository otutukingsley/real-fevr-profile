import React, { useContext } from "react"
import {
  Filler,
  Progress,
  ProgressBarContainer,
  ProgressBgWrapper,
  FillerText,
} from "../styles/componentStyles/progressbar"
import { popupContext } from "../context/PopupState"

const ProgressBar = ({ done, claimed, progressText, width }) => {
  const context = useContext(popupContext)
  const { handlePopup } = context

  const handleComplete = (done) => {
    if (done) {
      handlePopup()
    } else {
      return
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
            onClick={() => handleComplete(done)}
            done={done}
            claimed={claimed}
            width={width}
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
