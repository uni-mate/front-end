import React, { useCallback } from "react"
import MyRoomListPage from "./MyRoomListPage"
import { useDispatch, useSelector } from "react-redux"
import { RootState } from "./../../../types/types"
import { ChatType } from "../../../types/ChatTypes"
import {
  fetchMyChat,
  fetchMyChat2,
  fetchMyChat3,
} from "../../../redux/modules/mychat"

const MyRoomListPageContainer = () => {
  const dispatch = useDispatch()
  const userName = useSelector<RootState, string>(
    (state) => state.auth.user_data.username
  )
  const myChatList = useSelector<RootState, ChatType[]>(
    (state) => state.mychat.myChat_data
  )
  const fetchMyChatHandler = useCallback(() => {
    dispatch(fetchMyChat())
  }, [dispatch])
  const fetchMyChatHandler2 = useCallback(() => {
    dispatch(fetchMyChat2())
  }, [dispatch])
  const fetchMyChatHandler3 = useCallback(() => {
    dispatch(fetchMyChat3())
  }, [dispatch])
  return (
    <MyRoomListPage
      userName={userName}
      myChatList={myChatList}
      fetchMyChatHandler={fetchMyChatHandler}
      fetchMyChatHandler2={fetchMyChatHandler2}
      fetchMyChatHandler3={fetchMyChatHandler3}
    />
  )
}

export default MyRoomListPageContainer
