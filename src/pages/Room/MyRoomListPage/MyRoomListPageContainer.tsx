import React, { useCallback } from "react"
import MyRoomListPage from "./MyRoomListPage"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "./../../../types/types"
import { ChatType } from "../../../types/ChatTypes"
import { fetchMyChat } from "../../../redux/modules/mychat"

const MyRoomListPageContainer = () => {
  const dispatch = useDispatch()
  const myChatList = useSelector<RootState, ChatType[]>(
    (state) => state.mychat.myChat_data
  )
  const fetchMyChatHandler = useCallback(() => {
    dispatch(fetchMyChat())
  }, [dispatch])
  return (
    <MyRoomListPage
      myChatList={myChatList}
      fetchMyChatHandler={fetchMyChatHandler}
    />
  )
}

export default MyRoomListPageContainer
