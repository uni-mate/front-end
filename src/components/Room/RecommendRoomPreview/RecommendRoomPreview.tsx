import React, { Fragment, useState } from "react"
import LinesEllipsis from "react-lines-ellipsis"
import { ChatType } from "../../../types/ChatTypes"

import MeetStatus from "../../../assets/icons/chat/meet_status.png"
import PeopleCount from "../../../assets/icons/chat/count_people.png"

import BasicModal from "../../Partials/Modal/BasicModal"
import RoomModal from "./../../Partials/Modal/RoomModal/RoomModal"
import CustomHash from "../../Partials/CustomHash/CustomHash"

import CardView from "../../../assets/room/cardView.png"

import "./RecommendRoomPreview.css"

interface Props {
  chat: ChatType
}

const RecommendRoomPreview = ({ chat }: Props) => {
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
      <div className="recroom-preview" onClick={openModal}>
        <div className="recroom-preview__image">
          <div>
            <img src={CardView} alt="방" />
          </div>
          <div className="recroom-preview__desc">
            <div className="recroom-preview__count">
              <img src={PeopleCount} alt="people_count" />
              <span>
                {chat.head_count}/{chat.max_head_count}
              </span>
            </div>
            <div className="recroom-preview__meet-status">
              <img src={MeetStatus} alt="meet_status" />
              {chat.meet_status ? (
                <span>약속 확정</span>
              ) : (
                <span>약속 미확정</span>
              )}
            </div>
          </div>
          <div className="recroom-preview__hash">
            <CustomHash>
              {chat.chat_type === "promise" ? "약속방" : "채팅방"}
            </CustomHash>
            <CustomHash>{chat.chat_purpose}</CustomHash>
            <CustomHash>MBTI</CustomHash>
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
    </Fragment>
  )
}

export default RecommendRoomPreview
