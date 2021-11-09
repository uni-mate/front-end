import React, { useEffect, useState } from "react"

import "./RoomDesc.css"

interface Props {
  descState: string
  setAtr: (type: string) => void
}

const RoomDesc = ({ descState, setAtr }: Props) => {
  const [detDesc, setDetDesc] = useState(descState === "" ? "" : descState)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetDesc(e.target.value)
  }
  useEffect(() => {
    setAtr(detDesc)
  }, [setAtr, detDesc])
  return (
    <div className="desc__container">
      <div className="desc__title">
        <div>메이트들에게</div>
        <div>자유롭게 한 마디!</div>
      </div>
      <div className="desc-input__container">
        <input
          type="input"
          name="desc"
          value={detDesc}
          onChange={handleChange}
          placeholder="ex) 방에 대한 간단한 설명"
        ></input>
      </div>
      <div className="desc__button">
        <button onClick={() => alert("방 생성이 완료되었습니다.")}>
          완료하기
        </button>
      </div>
    </div>
  )
}

export default RoomDesc
