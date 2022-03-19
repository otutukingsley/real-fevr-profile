import React, { useContext } from "react"
import {
  Filler,
  Progress,
  ProgressBarContainer,
  ProgressBgWrapper,
  FillerText,
} from "../styles/componentStyles/progressbar"
import { popupContext } from "../context/PopupState"
import PropTypes from "prop-types"

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

ProgressBar.propTypes = {
  progressText: PropTypes.string,
  width: PropTypes.string,
  done: PropTypes.bool,
  claimed: PropTypes.bool,
}

export default ProgressBar
