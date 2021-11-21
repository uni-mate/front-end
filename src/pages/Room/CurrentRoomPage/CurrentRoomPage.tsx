import React, { useEffect, useState } from "react"
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

import "./CurrentRoomPage.css"

interface Props {
  currentChatPage?: ChatType
}

interface ChatInputType {
  chatid: string
  profileImg: string
  name: string
  desc: string
}

const CurrentRoomPage = ({ currentChatPage }: Props) => {
  const history = useHistory()
  const [, navbarOutside] = useNavbar()
  const [chatMsg, setChatMsg] = useState("")
  const [chatList, setChatList] = useState<ChatInputType[]>([])
  const [userList, setUserList] = useState(currentChatPage?.user_list)

  useEffect(() => {
    setUserList(currentChatPage?.user_list)
  }, [currentChatPage])

  // 입장 알림
  const [enterMessage] = useState({
    chatid: "chatNotice",
    profileImg: ChatBot,
    name: "뭉지",
    desc: "채팅방에 오신 것을 환영합니다!",
  })
  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    const body = {
      chatid: Math.floor(Math.random() * 10000).toString(),
      profileImg: ChatBot,
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
          <div>
            <div className="chatting-room__msg">
              <Chat key={chat.chatid} {...chat} />
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
