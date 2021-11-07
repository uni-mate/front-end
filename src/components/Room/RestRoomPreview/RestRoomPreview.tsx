import React from "react"
import { Chat } from "../../../types/types"
import CustomHash from "../../Partials/CustomHash/CustomHash"

import "./RestRoomPreview.css"

interface Props {
  chat: Chat
}

const RestRoomPreview = ({ chat }: Props) => {
  return (
    <div className="restroom-preview">
      <div className="restroom-preview__header">
        <div className="restroom-preview__header--title">{chat.title}</div>
        <div className="restroom-preview__header--desc">21학번..?</div>
      </div>
      <div className="restroom-preview__body">
        <div className="restroom-preview__hash">
          <CustomHash>#약속방</CustomHash>
          <CustomHash>#저녁 약속</CustomHash>
          <CustomHash>#MBTI 모임</CustomHash>
        </div>
        <div className="restroom-preview__count">
          <span>아이콘</span>
          <span>{chat.head_count}</span>
        </div>
      </div>
    </div>
  )
}

export default RestRoomPreview
