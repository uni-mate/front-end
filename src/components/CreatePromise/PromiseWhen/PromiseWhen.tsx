import React, { useEffect, useState } from "react"

import DatePicker, { registerLocale } from "react-datepicker"
import ko from "date-fns/locale/ko"
import "react-datepicker/dist/react-datepicker.css"

import "./PromiseWhen.css"
registerLocale("ko", ko)

interface Props {
  setIdx: (idx: number) => void
  setAtr: (atr: string) => void
  date: string
}

const PromiseWhen = ({ setIdx, setAtr, date }: Props) => {
  const [detPromiseDate, setDetPromiseDate] = useState(date === "" ? "" : date)
  useEffect(() => {
    setIdx(2)
    setAtr(detPromiseDate)
  }, [setIdx, setAtr, detPromiseDate])
  return (
    <div className="promise-when__container">
      <div className="promise-when__title">
        <div>언제 모일까요?</div>
      </div>
      <div className="promise-when-input__container">
        <input
          type="input"
          name="title"
          value={detPromiseDate}
          onChange={(e) => setDetPromiseDate(e.target.value)}
          placeholder="약속 날짜와 시간을 정해주세요."
        ></input>
      </div>
    </div>
  )
}

export default PromiseWhen
