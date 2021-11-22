import React, { useEffect, useRef, useState } from "react"
import { useHistory } from "react-router"
import SwipeableTemporaryDrawer from "./../../../components/Partials/SideDrawer/SideDrawer"
import LinesEllipsis from "react-lines-ellipsis"
import useNavbar from "../../../hooks/useNavbar"

import ArrowBackIcon from "../../../assets/icons/attr/goback.png"
import MenuIcon from "../../../assets/icons/attr/menu.png"
import SubmitIcon from "../../../assets/icons/attr/chatting_submit.png"
import Camera from "../../../assets/icons/attr/camera.png"
import MakePromise from "../../../assets/icons/attr/make_promise.png"
import Chat from "../../../components/Chat/Chat"
import ChatBot from "../../../assets/chatBot/chatBot.png"
import { ChatType } from "../../../types/ChatTypes"
import me from "../../../assets/me/me.jpg"

import { io, Socket } from "socket.io-client"

import "./CurrentRoomPage.css"

interface Props {
  currentChatPage?: ChatType
  userId: string
}

interface ChatInputType {
  chatid: string
  profileImg: string
  name: string
  desc: string
}

export const getTime = (hour: number, minute: number) => {
  let isAMPM = "오전"
  let myHour = hour
  let myMinute = minute
  if (hour > 12) {
    myHour = 13 % 12
    isAMPM = "오후"
  }
  if (myMinute < 10) {
    myMinute = parseInt(`0${minute}`)
  }
  return `${isAMPM} ${myHour} ${myMinute}`
}

const CurrentRoomPage = ({ currentChatPage, userId }: Props) => {
  const history = useHistory()
  const [, navbarOutside] = useNavbar()
  const [chatMsg, setChatMsg] = useState("")
  const [chatList, setChatList] = useState<ChatInputType[]>([])
  const [userList, setUserList] = useState(currentChatPage?.user_list)
  const socket = useRef<Socket>()

  useEffect(() => {
    setUserList(currentChatPage?.user_list)
  }, [currentChatPage])

  // socket
  // useEffect(() => {
  //   socket.current = io("http://localhost:8900")
  // }, [])
  // useEffect(() => {
  //   socket.current.emit("addUser", userId)
  //   socket.current.on("getUsers", (users) => console.log(users))
  // }, [userId])

  // 입장 알림
  const [enterMessage] = useState({
    chatid: "chatNotice",
    profileImg: ChatBot,
    name: "뭉지",
    desc: "환영합니다!",
    time: getTime(new Date().getHours(), new Date().getMinutes()),
    not_me: true,
  })
  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    const body = {
      chatid: Math.floor(Math.random() * 10000).toString(),
      profileImg: me,
      name: "고니",
      desc: chatMsg,
      time: getTime(new Date().getHours(), new Date().getMinutes()),
      not_me: false,
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
            text={currentChatPage?.title}
            maxLine="1"
            ellipsis="..."
            trimRight
            basedOn="letters"
            className="chatting-room__header--title"
          ></LinesEllipsis>
          <SwipeableTemporaryDrawer
            userList={userList}
            currentChatPage={currentChatPage}
          >
            <div className="chatting-room__menu-icon">
              <img src={MenuIcon} alt="menu" />
            </div>
          </SwipeableTemporaryDrawer>
        </div>
      </div>
      <div className="chatting-room__container">
        <Chat {...enterMessage} admin={true} />
        {chatList?.map((chat) => (
          <div className="chatting-room__msg">
            <Chat key={chat.chatid} {...chat} />
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
