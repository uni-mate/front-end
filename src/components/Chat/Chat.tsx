import React, { Fragment, useState } from "react"
import BasicModal from "../Partials/Modal/BasicModal"
// import ProfileModal from "../Partials/Modal/ProfileModal/ProfileModal"
import PromiseModal from "../Partials/Modal/PromiseModal/PromiseModal"
import { PromiseType } from "./../../types/PromiseTypes"

import "./Chat.css"

interface Props {
  profileImg: string
  name: string
  desc: string
  not_me?: boolean
  admin?: boolean
  promise?: boolean
  promiseDesc?: PromiseType
  time?: string
  text?: boolean
  faculty?: string
  username?: string
}

const Chat = ({
  profileImg,
  name,
  desc,
  not_me,
  admin,
  promise,
  promiseDesc,
  time,
  text,
  username,
  faculty,
}: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  return (
    <Fragment>
      {isModalOpen && (
        <BasicModal
          isModalOpen={true}
          width="300px"
          backgroundColor="#fff"
          boxShadow={24}
          padding="30px 20px"
          ani={true}
        >
          <PromiseModal
            closeModal={() => setIsModalOpen(false)}
            promiseDesc={promiseDesc}
          />
        </BasicModal>
      )}
      <div
        className={`${text ? "text" : "chat-detail"} ${
          admin ? "admin" : "not--admin"
        } ${not_me ? "not--me" : "me"}`}
      >
        <div className="chat__time">{time}</div>
        {!promise ? (
          <div className="chat-msg">{desc}</div>
        ) : (
          <div className="chat-msg promise">
            <div className="chat-msg__title">{`${username}님이 약속을 등록했어요!`}</div>
            <div className="chat-msg__content">
              <div>{`약속 이름: ${promiseDesc.promise_title}`}</div>
              <div>{`목적: ${promiseDesc.promise_purpose}`}</div>
              <div>{`일시: ${promiseDesc.when_to_meet}`}</div>
              <div>{`장소: ${promiseDesc.where_to_meet}`}</div>
            </div>
            <div className="chat-msg__button">
              <button onClick={() => alert("아직 구현되지 않았습니다.")}>
                참석할게요!
              </button>
              <button onClick={() => setIsModalOpen(true)}>자세히 보기</button>
            </div>
          </div>
        )}
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
