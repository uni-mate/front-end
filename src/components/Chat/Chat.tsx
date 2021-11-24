import React, { Fragment, useState } from "react"
import BasicModal from "../Partials/Modal/BasicModal"
import ProfileModal from "../Partials/Modal/ProfileModal/ProfileModal"

import "./Chat.css"

interface Props {
  profileImg: string
  name: string
  desc: string
  not_me?: boolean
  admin?: boolean
  time?: string
  text?: boolean
  faculty?: string
}

const Chat = ({
  profileImg,
  name,
  desc,
  not_me,
  admin,
  time,
  text,
  faculty,
}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <Fragment>
      {isModalOpen && (
        <BasicModal
          isModalOpen={isModalOpen && !admin}
          width="200px"
          backgroundColor="#fff"
          boxShadow={24}
          padding="30px 20px"
          ani={true}
        >
          <ProfileModal
            closeModal={() => setIsModalOpen(false)}
            profileImg={profileImg}
            name={name}
            desc={desc}
            faculty={faculty}
          />
        </BasicModal>
      )}
      <div
        className={`${text ? "text" : "chat-detail"} ${admin ? "admin" : ""} ${
          not_me ? "not--me" : "me"
        }`}
      >
        <div className="chat__time">{time}</div>
        <div className="chat-msg">{desc}</div>
        <div className="chat-profile">
          {!text && (
            <div
              className="chat-profile__img"
              onClick={() => setIsModalOpen(true)}
            >
              <img src={profileImg} alt="profile_img" />
            </div>
          )}
          <div className="chat-profile__name">{name}</div>
        </div>
      </div>
    </Fragment>
  )
}

export default Chat
