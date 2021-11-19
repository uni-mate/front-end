import React, { Fragment, useState } from "react"
import { ChatType } from "../../../types/ChatTypes"
import MeetStatus from "../../../assets/icons/chat/meet_status.png"
import PeopleCount from "../../../assets/icons/chat/count_people.png"

import BasicModal from "../../Partials/Modal/BasicModal"
import RoomModal from "../../Partials/Modal/RoomModal/RoomModal"

import "./RestRoomPreview.css"
import CustomHash from "../../Partials/CustomHash/CustomHash"

interface Props {
  chat: ChatType
}

const RestRoomPreview = ({ chat }: Props) => {
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  return (
    <Fragment>
      {isModalOpen && (
        <BasicModal
          isModalOpen={isModalOpen}
          width="300px"
          height="500px"
          backgroundColor="#fff"
          boxShadow={24}
          padding="30px 20px"
        >
          <RoomModal chat={chat} closeModal={closeModal} />
        </BasicModal>
      )}
      <div className="restroom-preview" onClick={openModal}>
        <div className="restroom-preview__header">
          <div className="restroom-preview__header--title">{chat.title}</div>
          <div className="restroom-preview__header--desc">
            {chat.description}
          </div>
        </div>
        <div className="restroom-preview__body">
          <div className="restroom-preview__hash">
            <CustomHash>
              {chat.chat_type === "promise" ? "약속방" : "채팅방"}
            </CustomHash>
            <CustomHash>{chat.chat_purpose}</CustomHash>
            <CustomHash>MBTI</CustomHash>
          </div>
          <div className="restroom-preview__meet">
            <div className="restroom-preview__meet-status">
              <img src={MeetStatus} alt="meet_status" />
              {chat.meet_status ? (
                <span>약속 확정</span>
              ) : (
                <span>약속 미확정</span>
              )}
            </div>
            <div className="restroom-preview__count">
              <img src={PeopleCount} alt="people_count" />
              <span>
                {chat.head_count}/{chat.max_head_count}
              </span>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default RestRoomPreview
