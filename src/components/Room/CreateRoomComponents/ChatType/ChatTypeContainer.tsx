import React, { useCallback } from "react"
import { useDispatch, useSelector } from "react-redux"
import { setChatType, setPage } from "../../../../redux/modules/createRoom"
import { RootState } from "../../../../types/types"
import ChatType from "./ChatType"

const ChatTypeContainer = () => {
  const chatTypeState = useSelector<RootState, string>(
    (state) => state.createRoom.createRoom_data?.chat_type
  )
  const dispatch = useDispatch()
  const setIdx = useCallback(
    (idx) => {
      dispatch(setPage(idx))
    },
    [dispatch]
  )
  const setAtr = useCallback(
    (type) => {
      dispatch(setChatType(type))
    },
    [dispatch]
  )
  return (
    <ChatType setAtr={setAtr} setIdx={setIdx} chatTypeState={chatTypeState} />
  )
}

export default ChatTypeContainer
