import React from "react"

import "./Chat.css"

interface Props {
  profileImg: string
  name: string
  desc: string
  not_me?: boolean
  admin?: boolean
  time?: string
}

const Chat = ({ profileImg, name, desc, not_me, admin, time }: Props) => {
  return (
    <div
      className={`${admin ? "admin" : ""} ${
        not_me ? "not--me" : "me"
      } chat-detail`}
    >
      <div className="chat__time">{time}</div>
      <div className="chat-msg">{desc}</div>
      <div className="chat-profile">
        <div className="chat-profile__img">
          <img src={profileImg} alt="profile_img" />
        </div>
        <div className="chat-profile__name">{name}</div>
      </div>
    </div>
  )
}

export default Chat
