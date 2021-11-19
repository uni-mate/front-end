import React from "react"
import { ChatType } from "../../../../types/ChatTypes"

import _ from "lodash"

import "./RoomModal.css"

interface Props {
  chat: ChatType
  closeModal: () => void
  isMyRoom?: boolean
}

const RoomModal = (props: Props) => {
  const { title, description, chat_type, chat_purpose, grade, select_gender } =
    props.chat
  const { closeModal, isMyRoom } = props
  return (
    <div className="allroom-modal">
      <div className="allroom-modal__title">
        <span>{title}</span>
      </div>
      <div className="allroom-modal__body">
        <div className="allroom-modal__body--desc">
          <span>방 설명</span>
          <div>{description}</div>
        </div>
        <div className="allroom-modal__body--desc">
          <span>방 성격</span>
          <div>{chat_type === "promise" ? "약속방" : "채팅방"}</div>
        </div>
        <div className="allroom-modal__body--desc">
          <span>약속 목적</span>
          {_.size(chat_purpose) !== 0 ? (
            <div>{chat_purpose}</div>
          ) : (
            <div className="empty">미결정</div>
          )}
        </div>
        <div className="allroom-modal__body--desc">
          <span>학년</span>
          <div>{grade}학년</div>
        </div>
        <div className="allroom-modal__body--desc">
          <span>성별</span>
          <div>{select_gender === "men" ? "남자" : "여자"}</div>
        </div>
        <div className="allroom-modal__body--desc">
          <span>공통점</span>
          <div>MBTI_ESFJ</div>
        </div>
      </div>
      <div className={`allroom-modal__button ${isMyRoom ? "myroom" : ""}`}>
        <button onClick={closeModal}>설명창 닫기</button>
        {!isMyRoom && (
          <button onClick={() => alert("인원이 가득 찼습니다!")}>
            이 방에 참여할게요!
          </button>
        )}
      </div>
    </div>
  )
}

export default RoomModal
