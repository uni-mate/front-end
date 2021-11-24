import React, { useEffect, useState } from "react"

import "./PromiseTitle.css"

interface Props {
  setIdx: (idx: number) => void
  setAtr: (atr: string) => void
  title: string
}

const PromiseTitle = ({ setIdx, setAtr, title }: Props) => {
  const [detPromiseTitle, setDetPromiseTitle] = useState(
    title === "" ? "" : title
  )
  useEffect(() => {
    setIdx(4)
    setAtr(detPromiseTitle)
  }, [setIdx, setAtr, detPromiseTitle])
  return (
    <div className="promise-title__container">
      <div className="promise-title__title">
        <div>약속의 이름은 무엇인가요?</div>
      </div>
      <div className="promise-title-input__container">
        <input
          type="input"
          name="title"
          value={detPromiseTitle}
          onChange={(e) => setDetPromiseTitle(e.target.value)}
          placeholder="약속 이름을 적어주세요"
        ></input>
      </div>
    </div>
  )
}

export default PromiseTitle
