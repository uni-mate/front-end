import React, { useCallback } from "react"
import RoomListPage from "./RoomListPage"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllChat } from "../../../redux/modules/chat"
import { Chat, RootState } from "./../../../types/types"

const RoomListPageContainer = () => {
  const dispatch = useDispatch()
  const allChatList = useSelector<RootState, Chat[] | undefined>(
    (state) => state.chat.chat_data
  )
  const fetchChatLoading = useSelector<RootState, boolean>(
    (state) => state.chat.chat_loading
  )
  const createLoading = useSelector<RootState, boolean>(
    (state) => state.createRoom.createRoom_loading
  )
  const fetchAllChatSaga = useCallback(() => {
    dispatch(fetchAllChat())
  }, [dispatch])
  return (
    <RoomListPage
      fetchAllChatSaga={fetchAllChatSaga}
      fetchChatLoading={fetchChatLoading}
      createLoading={createLoading}
      allChatList={allChatList}
    />
  )
}

export default RoomListPageContainer
