import React, { useEffect, useState } from "react"

import "./RoomTitle.css"

interface Props {
  titleState: string
  setAtr: (type: string) => void
  setIdx: (idx: number) => void
}

const RoomTitle = ({ titleState, setAtr, setIdx }: Props) => {
  const [detTitle, setDetTitle] = useState(titleState === "" ? "" : titleState)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetTitle(e.target.value)
  }
  useEffect(() => {
    setIdx(7)
    setAtr(detTitle)
  }, [setIdx, setAtr, detTitle])
  return (
    <div className="title__container">
      <div className="title__title">
        <div>이 방의 이름은</div>
        <div>무엇인가요?</div>
      </div>
      <div className="title-input__container">
        <input
          type="input"
          name="title"
          value={detTitle}
          onChange={handleChange}
          placeholder="방의 이름을 지어주세요"
        ></input>
      </div>
    </div>
  )
}

export default RoomTitle
