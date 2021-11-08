import React, { useCallback } from "react"
import { useDispatch } from "react-redux"
import { setChatType } from "../../../../redux/modules/createRoom"
import ChatType from "./ChatType"

const ChatTypeContainer = () => {
  const dispatch = useDispatch()
  const setAtr = useCallback(
    (type) => {
      dispatch(setChatType(type))
    },
    [dispatch]
  )
  return <ChatType setAtr={setAtr} />
}

export default ChatTypeContainer
