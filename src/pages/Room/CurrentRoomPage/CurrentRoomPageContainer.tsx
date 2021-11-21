import React, { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useParams } from "react-router"
import { ChatType } from "./../../../types/ChatTypes"
import { RootState } from "./../../../types/types"
import CurrentRoomPage from "./CurrentRoomPage"

interface Params {
  roomid: string
}

const CurrentRoomPageContainer = () => {
  const params = useParams<Params>()
  const myChatList = useSelector<RootState, ChatType[]>(
    (state) => state.mychat.myChat_data
  )
  const [currentChatPage, setCurrentChatPage] = useState<ChatType>()
  useEffect(() => {
    setCurrentChatPage(
      (prev) =>
        myChatList && myChatList.find((chat) => chat.chat_id === params.roomid)
    )
  }, [myChatList, params.roomid, currentChatPage])
  return <CurrentRoomPage currentChatPage={currentChatPage} />
}

export default CurrentRoomPageContainer
