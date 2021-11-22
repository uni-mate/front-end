import React, { Fragment, useEffect, useState } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import { useLongPress } from "use-long-press"
import { ChatType } from "../../../types/ChatTypes"
import LinesEllipsis from "react-lines-ellipsis"

import MeetStatus from "../../../assets/icons/chat/meet_status.png"
import PeopleCount from "../../../assets/icons/chat/count_people.png"
import BasicModal from "../../Partials/Modal/BasicModal"
import RoomModal from "../../Partials/Modal/RoomModal/RoomModal"
import { useAdddProfileImages } from "../../../hooks/useAddProfileImage"

import "./MyRoomPreiview.css"

interface Props {
  room: ChatType
}

interface Params {
  userid: string
}

interface ModalProps {
  showInfo?: () => void
  getOut?: () => void
}

const StateModal = ({ showInfo, getOut }: ModalProps) => {
  return (
    <div className="chatInfo-modal__container">
      <button onClick={showInfo}>채팅방 정보 보기</button>
      <button onClick={getOut}>채팅방 나가기</button>
    </div>
  )
}

const MyRoomPreiview = ({ room }: Props) => {
  const params = useParams<Params>()

  // modal
  const [isModalOpen, setIsModalOpen] = useState(false)
  const [isChatInfoModalOpen, setIsChatInfoModalOpen] = useState(false)
  const [isMyRoom] = useState(true)
  const [userNameList, setUserNameList] = useState("")
  const [userProfileList] = useState(room.user_list ? room.user_list : [])
  const [newProfileList] = useAdddProfileImages(userProfileList)

  const longPress = useLongPress(() => {
    setIsModalOpen(true)
  })
  useEffect(() => {
    setUserNameList(room.user_list.map((user) => user.name).join(", "))
  }, [room.user_list])

  return (
    <Fragment>
      {isModalOpen && (
        <BasicModal
          isModalOpen={isModalOpen}
          closeModal={() => {
            setIsModalOpen(false)
            setIsChatInfoModalOpen(false)
          }}
          width="160px"
          backgroundColor="#fff"
          boxShadow={24}
          padding="0px"
        >
          <StateModal
            showInfo={() => {
              setIsModalOpen(false)
              setIsChatInfoModalOpen(true)
            }}
          />
        </BasicModal>
      )}
      {isChatInfoModalOpen && (
        <BasicModal
          isModalOpen={isChatInfoModalOpen}
          closeModal={() => {
            setIsModalOpen(false)
            setIsChatInfoModalOpen(false)
          }}
          width="300px"
          height="500px"
          backgroundColor="#fff"
          boxShadow={24}
          padding="30px 20px"
        >
          <RoomModal
            closeModal={() => {
              setIsModalOpen(false)
              setIsChatInfoModalOpen(false)
            }}
            chat={room}
            isMyRoom={isMyRoom}
          />
        </BasicModal>
      )}

      <Link
        to={`/room/${params.userid}/${room.chat_id}`}
        className="myroom-enter"
        {...longPress}
      >
        <div className="myroom-preview">
          <div
            className={`myroom-preview__image-container ${`${
              room.head_count > 2 ? "number3" : `number${room.head_count}`
            }`}`}
          >
            {newProfileList?.map((user) => (
              <img key={user.name} src={user.image} alt="프로필" />
            ))}
            <span className="message-count">7</span>
          </div>
          <div className="myroom-preview__body-container">
            <div className="myroom-preview__title">
              <LinesEllipsis
                text={room.title}
                maxLine="1"
                ellipsis="..."
                trimRight
                basedOn="letters"
              ></LinesEllipsis>
            </div>
            <div className="myroom-preview__username">
              {userNameList && (
                <LinesEllipsis
                  text={userNameList}
                  maxLine="1"
                  ellipsis="..."
                  trimRight
                  basedOn="letters"
                ></LinesEllipsis>
              )}
            </div>
            <div className="myroom-preview__desc">
              <div className="myroom-preview__meet-status">
                <img src={MeetStatus} alt="meet_status" />
                <span>약속</span>
              </div>
              <div className="myroom-preview__count">
                <img src={PeopleCount} alt="people_count" />
                <span>
                  {room.head_count}/{room.max_head_count}
                </span>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </Fragment>
  )
}

export default MyRoomPreiview
