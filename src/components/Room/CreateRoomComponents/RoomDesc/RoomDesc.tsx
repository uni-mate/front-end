import React, { useEffect, useState } from "react"
import { createRoomData, CreateRoomState } from "../../../../types/types"

import "./RoomDesc.css"

interface Props {
  blockHandler: () => void
  descState: string
  totalState: CreateRoomState
  setAtr: (type: string) => void
  setIdx: (idx: number) => void
  setNewRoom: (body: createRoomData) => void
}

const RoomDesc = ({
  blockHandler,
  descState,
  totalState,
  setAtr,
  setIdx,
  setNewRoom,
}: Props) => {
  const [detDesc, setDetDesc] = useState(descState === "" ? "" : descState)
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetDesc(e.target.value)
  }
  const handleCreateRoom = () => {
    setNewRoom(totalState.createRoom_data)
    // alert(JSON.stringify(totalState.createRoom_data))
    blockHandler()
  }
  useEffect(() => {
    setIdx(8)
    setAtr(detDesc)
  }, [setIdx, setAtr, detDesc])
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
        <button onClick={handleCreateRoom}>완료하기</button>
      </div>
    </div>
  )
}

export default RoomDesc
