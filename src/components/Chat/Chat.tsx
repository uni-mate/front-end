import React from "react"

import "./Chat.css"

interface Props {
  profileImg: string
  name: string
  desc: string
  not_me?: boolean
  admin?: boolean
  time?: string
  text?: boolean
}

const Chat = ({ profileImg, name, desc, not_me, admin, time, text }: Props) => {
  return (
    <div
      className={`${text ? "text" : "chat-detail"} ${admin ? "admin" : ""} ${
        not_me ? "not--me" : "me"
      }`}
    >
      <div className="chat__time">{time}</div>
      <div className="chat-msg">{desc}</div>
      <div className="chat-profile">
        {!text && (
          <div className="chat-profile__img">
            <img src={profileImg} alt="profile_img" />
          </div>
        )}
        <div className="chat-profile__name">{name}</div>
      </div>
    </div>
  )
}

export default Chat
