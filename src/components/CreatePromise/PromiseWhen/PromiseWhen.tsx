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
  const [startDate, setStartDate] = useState<any>(new Date())
  useEffect(() => {
    console.log(startDate)
  }, [startDate])
  const [detPromiseDate, setDetPromiseDate] = useState(date === "" ? "" : date)
  useEffect(() => {
    setIdx(2)
  }, [setIdx])
  return (
    <div className="promise-when__container">
      <div className="promise-when__title">
        <div>언제 모일까요?</div>
      </div>
      <div className="promise-when-input__container">
        {/* <DatePicker
          selected={startDate}
          onChange={(date) => setStartDate(date)}
          locale="ko"
          placeholderText="날짜를 선택해주세요"
        ></DatePicker> */}
        <input
          type="input"
          name="title"
          value={detPromiseDate}
          onChange={(e) => setDetPromiseDate(e.target.value)}
          placeholder="약속 이름을 적어주세요"
        ></input>
      </div>
    </div>
  )
}

export default PromiseWhen
