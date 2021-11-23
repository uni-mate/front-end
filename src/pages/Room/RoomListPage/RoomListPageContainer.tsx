import React, { useCallback } from "react"
import RoomListPage from "./RoomListPage"
import { useDispatch, useSelector } from "react-redux"
import { fetchAllChat } from "../../../redux/modules/chat"
import { RootState } from "./../../../types/types"
import { ChatType } from "../../../types/ChatTypes"
import { FilterData } from "./../../../types/FilterTypes"
import { filterFinish } from "../../../redux/modules/filter"

const RoomListPageContainer = () => {
  const dispatch = useDispatch()
  const allChatList = useSelector<RootState, ChatType[] | undefined>(
    (state) => state.chat.chat_data
  )
  const fetchChatLoading = useSelector<RootState, boolean>(
    (state) => state.chat.chat_loading
  )
  const createLoading = useSelector<RootState, boolean>(
    (state) => state.createRoom.createRoom_loading
  )
  const isFilter = useSelector<RootState, boolean>(
    (state) => state.filter.isfilter
  )
  const filterInfo = useSelector<RootState, FilterData>(
    (state) => state.filter.filter_data
  )
  const fetchAllChatSaga = useCallback(() => {
    dispatch(fetchAllChat())
  }, [dispatch])
  const filterFinishHandler = useCallback(() => {
    dispatch(filterFinish())
  }, [dispatch])
  return (
    <RoomListPage
      fetchAllChatSaga={fetchAllChatSaga}
      fetchChatLoading={fetchChatLoading}
      createLoading={createLoading}
      allChatList={allChatList}
      isFilter={isFilter}
      filterInfo={filterInfo}
      filterFinishHandler={filterFinishHandler}
    />
  )
}

export default RoomListPageContainer
