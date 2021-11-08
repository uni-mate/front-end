import React, { useCallback, useState } from "react"

import { useDispatch } from "react-redux"
import { setChatType } from "./../../../../redux/modules/createRoom"

import "./ChatType.css"

interface Props {
  setAtr: (type: string) => void
}

const ChatType = ({ setAtr }: Props) => {
  const [detChatType, setDetChatType] = useState("appointment")
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetChatType(e.target.value)
  }
  const handleSet = () => {
    setAtr(detChatType)
  }
  return (
    <div className="chattype__container">
      <div className="cathtype__title">
        <div>어떤 방을</div>
        <span>만들고 싶으신가요?</span>
      </div>
      <div className="cathtype-input__container">
        <input
          type="radio"
          name="chat_type"
          id="appointment"
          value="appointment"
          onChange={handleChange}
          checked={detChatType === "appointment"}
        ></input>
        <label htmlFor="appointment" onClick={handleSet}>
          <div>오프라인 약속을 잡고 싶다면</div>
          <span>약속방</span>
        </label>
        <input
          type="radio"
          name="chat_type"
          id="chatting"
          value="chatting"
          onChange={handleChange}
          checked={detChatType === "chatting"}
        ></input>
        <label htmlFor="chatting" onClick={handleSet}>
          <div>채팅으로 먼저 친해지고 싶다면</div>
          <span>채팅방</span>
        </label>
      </div>
    </div>
  )
}

export default ChatType
