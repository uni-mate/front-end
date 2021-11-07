import React from "react"
import LinesEllipsis from "react-lines-ellipsis"
import { Chat } from "../../../types/types"
import CustomHash from "../../Partials/CustomHash/CustomHash"

import "./RecommendRoomPreview.css"

interface Props {
  chat: Chat
}

const RecommendRoomPreview = ({ chat }: Props) => {
  return (
    <div className="recroom-preview">
      <div className="recroom-preview__image">
        <div></div>
        <div className="recroom-preview__desc">
          <div className="recroom-preview__hash">
            <CustomHash>#약속방</CustomHash>
            <CustomHash>#저녁 약속</CustomHash>
            <CustomHash>#MBTI 모임</CustomHash>
          </div>
          <div className="recroom-preview__count">
            <span>아이콘</span>
            <span>{chat.head_count}</span>
          </div>
        </div>
      </div>
      <div className="recroom-preview__body">
        <LinesEllipsis
          text={chat.title}
          maxLine="1"
          ellipsis="..."
          trimRight
          basedOn="letters"
          className="recroom-preview__body--title"
        ></LinesEllipsis>
        <LinesEllipsis
          text={chat.description}
          maxLine="1"
          ellipsis="..."
          trimRight
          basedOn="letters"
          className="recroom-preview__body--desc"
        ></LinesEllipsis>
      </div>
    </div>
  )
}

export default RecommendRoomPreview
