import React, { useEffect, useRef, useState } from "react"
import { useHistory, useParams } from "react-router"
import SwipeableTemporaryDrawer from "./../../../components/Partials/SideDrawer/SideDrawer"
import LinesEllipsis from "react-lines-ellipsis"
import useNavbar from "../../../hooks/useNavbar"

import ArrowBackIcon from "../../../assets/icons/attr/goback.png"
import MenuIcon from "../../../assets/icons/attr/menu.png"
import SubmitIcon from "../../../assets/icons/attr/chatting_submit.png"
import Camera from "../../../assets/icons/attr/camera.png"
import MakePromise from "../../../assets/icons/attr/make_promise.png"
import ChatBot from "../../../assets/icons/chat/chatbot.png"
import User from "../../../assets/icons/chat/temp.png"

import Chat from "../../../components/Chat/Chat"

import "./CurrentRoomPage.css"

interface Params {
  roomid: string
}

const CurrentRoomPage = () => {
  const params = useParams<Params>()
  const history = useHistory()
  const [navbarInside, navbarOutside] = useNavbar()
  const [chatMsg, setChatMsg] = useState("")
  const [chatList, setChatList] = useState([
    {
      chatid: "123",
      profileImg: User,
      name: "너구리",
      desc: "말씀을 해 보시라구요.",
    },
  ])
  const chatBot = {
    chatid: Math.floor(Math.random() * 5000).toString(),
    profileImg: ChatBot,
    name: "챗봇",
    desc: "나는 챗봇이다~~!!",
  }
  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    const body = {
      chatid: Math.floor(Math.random() * 10000).toString(),
      profileImg: User,
      name: "너구리",
      desc: chatMsg,
    }
    setChatList((prev) => [...prev, body])
    setChatMsg("")
  }
  useEffect(() => {
    navbarOutside()
  }, [navbarOutside])

  return (
    <div className="chatting-room">
      <div className="chatting-room__header">
        <div className="chatting-room__header--container">
          <div
            className="chatting-room__prev-icon"
            onClick={() => history.goBack()}
          >
            <img src={ArrowBackIcon} alt="goback" />
          </div>

          <LinesEllipsis
            text=" 29일 저녁 맘스터치 같이 드실 분"
            maxLine="1"
            ellipsis="..."
            trimRight
            basedOn="letters"
            className="chatting-room__header--title"
          ></LinesEllipsis>
          <SwipeableTemporaryDrawer>
            <div className="chatting-room__menu-icon">
              <img src={MenuIcon} alt="menu" />
            </div>
          </SwipeableTemporaryDrawer>
        </div>
      </div>
      <div className="chatting-room__container">
        {chatList.map((chat) => (
          <div>
            <div className="chatting-room__msg">
              <Chat key={chat.chatid} {...chat} />
              <Chat key={chatBot.chatid} {...chatBot} admin={true} />
            </div>
          </div>
        ))}
      </div>
      <form className="chatting-room__form" onSubmit={onSubmitHandler}>
        <div className="camera">
          <img src={Camera} alt="camera" />
        </div>
        <input
          type="text"
          onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
            setChatMsg(e.target.value)
          }
          value={chatMsg}
          placeholder="대화를 입력해보세요"
        />
        <button type="submit">
          <img src={SubmitIcon} alt="submir" />
        </button>
        <div className="promise">
          <img src={MakePromise} alt="promise" />
        </div>
      </form>
    </div>
  )
}

export default CurrentRoomPage
