import React from "react"
import { Chat } from "./../../../../types/types"

import "./RoomModal.css"

interface Props {
  chat: Chat
  closeModal: () => void
}

const RoomModal = (props: Props) => {
  const { title, description, meet_status, chat_purpose, select_gender } =
    props.chat
  const { closeModal } = props
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
          <div>{chat_purpose}</div>
        </div>
        <div className="allroom-modal__body--desc">
          <span>약속 목적</span>
          {meet_status ? (
            <div>약속 결정</div>
          ) : (
            <div className="empty">none</div>
          )}
        </div>
        <div className="allroom-modal__body--desc">
          <span>학년</span>
          <div>3학년</div>
        </div>
        <div className="allroom-modal__body--desc">
          <span>성별</span>
          <div>{select_gender}</div>
        </div>
        <div className="allroom-modal__body--desc">
          <span>공통점</span>
          <div>MBTI_ESFJ</div>
        </div>
      </div>
      <div className="allroom-modal__button">
        <button onClick={closeModal}>설명창 닫기</button>
        <button onClick={() => alert("인원이 가득 찼습니다!")}>
          이 방에 참여할게요!
        </button>
      </div>
    </div>
  )
}

export default RoomModal
