import React, { Fragment, useEffect, useState } from "react"
import { ChatType } from "../../../types/ChatTypes"
import MeetStatus from "../../../assets/icons/chat/meet_status.png"
import PeopleCount from "../../../assets/icons/chat/count_people.png"

import BasicModal from "../../Partials/Modal/BasicModal"
import RoomModal from "../../Partials/Modal/RoomModal/RoomModal"

import "./RestRoomPreview.css"
import CustomHash from "../../Partials/CustomHash/CustomHash"

import _ from "lodash"

interface Props {
  chat: ChatType
}

const RestRoomPreview = ({ chat }: Props) => {
  const { chat_feature } = chat
  const [isModalOpen, setIsModalOpen] = useState(false)
  const openModal = () => setIsModalOpen(true)
  const closeModal = () => setIsModalOpen(false)
  const [MBTIValid, setMBTIValid] = useState(false)
  const [interestValid, setInterestValid] = useState(false)
  const [, setNoMatterValid] = useState(false)
  const [facultyValid, setFacultyValid] = useState(false)
  useEffect(() => {
    if (chat_feature.nomatter === true) {
      setNoMatterValid(true)
      setMBTIValid(false)
      setInterestValid(false)
      setFacultyValid(false)
    } else if (_.size(chat_feature.interest) > 0) {
      setNoMatterValid(false)
      setMBTIValid(false)
      setInterestValid(true)
      setFacultyValid(false)
    } else if (_.size(chat_feature.faculty) > 0) {
      setNoMatterValid(false)
      setMBTIValid(false)
      setInterestValid(false)
      setFacultyValid(true)
    } else {
      setNoMatterValid(false)
      setMBTIValid(true)
      setInterestValid(false)
      setFacultyValid(false)
    }
  }, [chat_feature])
  return (
    <Fragment>
      {isModalOpen && (
        <BasicModal
          isModalOpen={isModalOpen}
          width="300px"
          backgroundColor="#fff"
          boxShadow={24}
          padding="30px 20px"
          ani={true}
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
            {chat.chat_purpose && <CustomHash>{chat.chat_purpose}</CustomHash>}
            {MBTIValid && <CustomHash>MBTI</CustomHash>}
            {facultyValid && <CustomHash>단과대</CustomHash>}
            {interestValid && <CustomHash>관심사</CustomHash>}
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
