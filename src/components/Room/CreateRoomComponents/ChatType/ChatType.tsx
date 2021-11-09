import React, { useEffect, useState } from "react"

import "./ChatType.css"

interface Props {
  setAtr: (type: string) => void
  chatTypeState: string
}

const ChatType = ({ setAtr, chatTypeState }: Props) => {
  const [detChatType, setDetChatType] = useState(
    chatTypeState === "chatting" ? "chatting" : "appointment"
  )
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setDetChatType(e.target.value)
  }
  useEffect(() => {
    setAtr(detChatType)
  }, [setAtr, detChatType])
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
          checked={detChatType === "appointment" ? true : false}
        ></input>
        <label htmlFor="appointment">
          <div>오프라인 약속을 잡고 싶다면</div>
          <span>약속방</span>
        </label>
        <input
          type="radio"
          name="chat_type"
          id="chatting"
          value="chatting"
          onChange={handleChange}
          checked={detChatType === "chatting" ? true : false}
        ></input>
        <label htmlFor="chatting">
          <div>채팅으로 먼저 친해지고 싶다면</div>
          <span>채팅방</span>
        </label>
      </div>
    </div>
  )
}

export default ChatType
