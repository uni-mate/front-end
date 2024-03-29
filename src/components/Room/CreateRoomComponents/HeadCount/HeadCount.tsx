import React, { useEffect, useState } from "react"
import Slider from "@mui/material/Slider"

import "./HeadCount.css"

interface Props {
  headCountState: number
  setAtr: (type: number) => void
  setIdx: (idx: number) => void
}

const HeadCount = ({ headCountState, setAtr, setIdx }: Props) => {
  const [detHeadCount, setDetHeadCount] = useState<number>(
    headCountState === 3 ? 3 : headCountState
  )
  const handleCountChange = (event: any, newValue: any) => {
    setDetHeadCount((prev) => newValue as number)
  }
  useEffect(() => {
    setIdx(4)
    setAtr(detHeadCount)
  }, [setIdx, setAtr, detHeadCount])
  return (
    <div className="head-count__container">
      <div className="head-count__title">
        <div>몇 명까지 들어올 수 잇나요?</div>
      </div>
      <div className="head-count-input__container">
        <div className="room-user__select">
          <Slider
            aria-label="count"
            className="room-user__silder"
            value={detHeadCount || 3}
            defaultValue={3}
            step={1}
            min={3}
            max={15}
            sx={{
              "& .MuiSlider-track": {
                backgroundColor: "var(--main-color)",
                border: "var(--main-color)",
              },
              "& .MuiSlider-valueLabelOpen": {
                backgroundColor: "var(--main-color)",
              },
              "& .MuiSlider-valueLabel": {
                width: "100%",
                backgroundColor: "var(--main-color)",
              },
              "& .MuiSlider-valueLabelLabel": {
                color: "#fff",
              },
            }}
            valueLabelDisplay="auto"
            name="head_count"
            onChange={handleCountChange}
          />
          <span className="room-user__select--min">최소 3명</span>
          <span className="room-user__select--max">15명 이상</span>
        </div>
      </div>
    </div>
  )
}

export default HeadCount
