import React, { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setChatType } from "../../../../redux/modules/createRoom"
import { RootState } from "../../../../types/types"
import ChatType from "./ChatType"

const ChatTypeContainer = () => {
  const chatTypeState = useSelector<RootState, string>(
    (state) => state.createRoom.chat_type
  )
  const dispatch = useDispatch()
  const setAtr = useCallback(
    (type) => {
      dispatch(setChatType(type))
    },
    [dispatch]
  )
  return <ChatType setAtr={setAtr} chatTypeState={chatTypeState} />
}

export default ChatTypeContainer
