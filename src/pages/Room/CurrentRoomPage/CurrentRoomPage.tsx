import React, { Fragment, useEffect, useRef, useState } from "react"
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
import user1 from "../../../assets/user/user1.jpg"
import user2 from "../../../assets/user/user2.jpg"
import Submit from "../../../assets/chattingRoom/submit.png"
import { io, Socket } from "socket.io-client"
import { UserState } from "../../../types/UserTypes"
import { PromiseType } from "../../../types/PromiseTypes"

import _ from "lodash"

import "./CurrentRoomPage.css"

interface Props {
  currentChatPage?: ChatType
  userInfo: UserState
  promiseInfo: PromiseType
  isPromiseFinish: boolean
  settingPromise: () => void
}

interface ChatInputType {
  chatid: string
  profileImg: string
  name: string
  desc: string
  time: string
  not_me?: boolean
  admin?: boolean
  text?: boolean
  promiseDesc?: PromiseType
  promise?: boolean
  username?: string
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

const getProfileImg = (name: string) => {
  if (name === "고니") {
    return me
  } else if (name === "아이유") {
    return user1
  } else if (name === "조이") {
    return user2
  }
}

const CurrentRoomPage = ({
  currentChatPage,
  userInfo,
  promiseInfo,
  isPromiseFinish,
  settingPromise,
}: Props) => {
  const history = useHistory()
  const [, navbarOutside] = useNavbar()
  const [chatMsg, setChatMsg] = useState("")
  const [enterMessage, setEnterMessage] = useState<ChatInputType>() // 몽지 알림
  const [enterText, setEnterText] = useState<ChatInputType>() // 채팅방 알림
  const [arrivalMessage, setArrivalMessage] = useState<ChatInputType>()
  const [chatList, setChatList] = useState<ChatInputType[]>([])
  const [userList, setUserList] = useState(currentChatPage?.user_list)
  const [promiseText, setPromiseText] = useState<ChatInputType>()
  const socket = useRef<Socket>()
  const scrollRef = useRef<HTMLInputElement>(null)
  const inputRef = useRef<HTMLInputElement>()

  useEffect(() => {
    setUserList(currentChatPage?.user_list)
  }, [currentChatPage])

  useEffect(() => {
    setPromiseText({
      chatid: Math.floor(Math.random() * 10000).toString(),
      profileImg: ChatBot,
      name: "뭉지",
      username: userInfo.username,
      desc: `${userInfo.username}님이 약속을 등록했어요!`,
      promiseDesc: promiseInfo,
      time: getTime(new Date().getHours(), new Date().getMinutes()),
      admin: true,
      promise: true,
    })
  }, [userInfo, promiseInfo])

  useEffect(() => {
    //약속 등록을 마치면
    isPromiseFinish &&
      setChatList((prev) => {
        return [...prev, promiseText]
      })
    return () => {
      settingPromise()
    }
  }, [isPromiseFinish, promiseText, settingPromise])

  useEffect(() => {
    scrollRef?.current?.scrollIntoView({ behavior: "smooth" })
  }, [chatList])

  useEffect(() => {
    inputRef.current.focus()
  }, [])

  // socket
  useEffect(() => {
    socket.current = io(process.env.REACT_APP_SOCKET_URL)
    socket.current.on("getMessage", (data) => {
      setArrivalMessage({
        chatid: Math.floor(Math.random() * 10000).toString(),
        profileImg: getProfileImg(data.senderName),
        name: data.senderName,
        desc: data.text,
        time: getTime(new Date().getHours(), new Date().getMinutes()),
        not_me: true,
      })
    })
    return () => {
      socket.current.close()
    }
  }, [])
  useEffect(() => {
    arrivalMessage && setChatList((prev) => [...prev, arrivalMessage])
  }, [arrivalMessage, currentChatPage?.user_list])
  useEffect(() => {
    enterText &&
      setChatList((prev) => {
        setEnterText(null)
        return [...prev, enterText]
      })
    enterMessage &&
      setChatList((prev) => {
        setEnterMessage(null)
        return [...prev, enterMessage]
      })
  }, [enterMessage, enterText])
  useEffect(() => {
    socket.current.emit("addUser", userInfo.username)
  }, [userInfo])

  useEffect(() => {
    socket.current.on("getUsers", (userName) => {
      setEnterText({
        chatid: Math.floor(Math.random() * 10000).toString(),
        profileImg: "",
        name: "",
        desc: `${userName}님이 입장하셨습니다.`,
        time: "",
        text: true,
      })
    })
    socket.current.on("getUsers", (userName) => {
      setEnterMessage({
        chatid: "chatNotice",
        profileImg: ChatBot,
        name: "뭉지",
        desc: `반가워요 ${userName}님! 나는 몽지라고 해요 (>'-'<)`,
        time: getTime(new Date().getHours(), new Date().getMinutes()),
        admin: true,
      })
    })
    return () => {
      socket.current.close()
    }
  }, [])
  useEffect(() => {
    socket.current.emit("removeUser", userInfo.username)
  }, [userInfo.username])

  const onSubmitHandler = (e: React.FormEvent) => {
    e.preventDefault()
    const body = {
      chatid: Math.floor(Math.random() * 10000).toString(),
      profileImg: getProfileImg(userInfo.username),
      name: userInfo.username,
      desc: chatMsg,
      time: getTime(new Date().getHours(), new Date().getMinutes()),
      not_me: false,
    }
    setChatList((prev) => [...prev, body])

    const receiverNameList = currentChatPage?.user_list.filter(
      (user) => user.name !== userInfo.username
    )

    socket.current.emit("sendMessage", {
      senderName: userInfo.username,
      receiverNameList: receiverNameList,
      text: chatMsg,
    })
    setChatMsg("")
    inputRef.current.focus()
  }
  useEffect(() => {
    navbarOutside()
  }, [navbarOutside])

  return (
    <Fragment>
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
          {chatList?.map((chat) => (
            <div className="chatting-room__msg" ref={scrollRef}>
              <Chat key={chat.chatid} {...chat} />
            </div>
          ))}
        </div>
        <form
          className="chatting-room__form"
          onSubmit={(e) => e.preventDefault()}
        >
          <div className="camera">
            <img src={Camera} alt="camera" />
          </div>
          <input
            ref={inputRef}
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
          {_.size(chatMsg) > 0 && (
            <div className="submit" onClick={onSubmitHandler}>
              <img src={Submit} alt="submit" />
            </div>
          )}
        </form>
      </div>
    </Fragment>
  )
}

export default CurrentRoomPage
