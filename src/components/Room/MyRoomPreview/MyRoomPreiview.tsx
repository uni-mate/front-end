import { Typography } from "@mui/material"
import React, { Fragment, useState } from "react"
import { useParams } from "react-router"
import { Link } from "react-router-dom"
import { useLongPress } from "use-long-press"
import BasicModal from "../../Partials/Modal/BasicModal"
import LinesEllipsis from "react-lines-ellipsis"

import user1 from "../../../assets/user/user1.jpg"
import user2 from "../../../assets/user/user2.jpg"
import user3 from "../../../assets/user/user3.png"

import "./MyRoomPreiview.css"
import CustomHash from "./../../Partials/CustomHash/CustomHash"

interface MyRoomInfo {
  roomid: string
  title: string
  userList?: { userImage?: string }[]
}

interface Props {
  room: MyRoomInfo
}

interface Params {
  userid: string
}

const styles = {
  border: "1px solid green",
}

const modalChildren = (
  <div>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      알림 끄기
    </Typography>
    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
      방 나가기
    </Typography>
  </div>
)

const MyRoomPreiview = ({ room }: Props) => {
  const params = useParams<Params>()
  const [isModalOpen, setIsModalOpen] = useState(false)
  const longPress = useLongPress(() => {
    setIsModalOpen(true)
  })

  return (
    <Fragment>
      <Link
        to={`/room/${params.userid}/${room.roomid}`}
        className="myroom-enter"
        {...longPress}
      >
        <div className="myroom-preview">
          <div className="myroom-preview__image-container">
            <img src={user1} alt="유저1" />
            <img src={user2} alt="유저2" />
            <img src={user3} alt="유저3" />
            <span className="message-count">7</span>
          </div>
          <div className="myroom-preview__body-container">
            <div className="myroom-preview__title">
              <LinesEllipsis
                text=" 29일 저녁 맘스머치 같이 드실 분"
                maxLine="1"
                ellipsis="..."
                trimRight
                basedOn="letters"
              ></LinesEllipsis>
              <div className="myroom-preview__username">
                <span>개구리, </span>
                <span>올챙이, </span>
                <span>원숭이? </span>
              </div>
            </div>
            <div className="myroom-preview__desc">
              <CustomHash>#방탈출</CustomHash>
              <CustomHash>#술마시기</CustomHash>
              <CustomHash>#MBTI 모임</CustomHash>
            </div>
          </div>
        </div>
      </Link>
      {isModalOpen && <BasicModal children={modalChildren} styles={styles} />}
    </Fragment>
  )
}

export default MyRoomPreiview
