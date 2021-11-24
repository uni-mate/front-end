import React, { useCallback, useEffect, useState } from "react"
import { useDispatch, useSelector } from "react-redux"
import { useParams } from "react-router"
import { ChatType } from "./../../../types/ChatTypes"
import { RootState } from "./../../../types/types"
import CurrentRoomPage from "./CurrentRoomPage"
import { UserState } from "./../../../types/UserTypes"
import { PromiseType } from "../../../types/PromiseTypes"
import { promiseReReady } from "../../../redux/modules/promise"

interface Params {
  roomid: string
}

const CurrentRoomPageContainer = () => {
  const dispatch = useDispatch()
  const params = useParams<Params>()
  const myChatList = useSelector<RootState, ChatType[]>(
    (state) => state.mychat.myChat_data
  )
  const userInfo = useSelector<RootState, UserState>(
    (state) => state.auth.user_data
  )
  const promiseInfo = useSelector<RootState, PromiseType>(
    (state) => state.promise.createPromise_data
  )
  const isPromiseFinish = useSelector<RootState, boolean>(
    (state) => state.promise.createPromise_success
  )
  const [currentChatPage, setCurrentChatPage] = useState<ChatType>()
  const settingPromise = useCallback(() => {
    dispatch(promiseReReady())
  }, [dispatch])
  useEffect(() => {
    setCurrentChatPage(
      (prev) =>
        myChatList && myChatList.find((chat) => chat.chat_id === params.roomid)
    )
  }, [myChatList, params.roomid, currentChatPage])
  return (
    <CurrentRoomPage
      currentChatPage={currentChatPage}
      userInfo={userInfo}
      promiseInfo={promiseInfo}
      isPromiseFinish={isPromiseFinish}
      settingPromise={settingPromise}
    />
  )
}

export default CurrentRoomPageContainer
