import React, { useEffect } from "react"
import MyRoomPreiview from "../../../components/Room/MyRoomPreview/MyRoomPreiview"
import SearchIcon from "../../../assets/icons/attr/search.png"
import useNavbar from "../../../hooks/useNavbar"
import { ChatType } from "../../../types/ChatTypes"

import "./MyRoomListPage.css"

interface Props {
  myChatList: ChatType[]
  fetchMyChatHandler: () => void
}

const MyRoomListPage = ({ myChatList, fetchMyChatHandler }: Props) => {
  const [navbarInside] = useNavbar()
  useEffect(() => {
    // fetchMyChatHandler()
    navbarInside()
  }, [fetchMyChatHandler, navbarInside])
  return (
    <div className="myroom-list">
      <div className="myroom-list__header">
        <span className="myroom-list__header--title">채팅</span>
        <div className="myroom__search-icon">
          <img src={SearchIcon} alt="search" />
        </div>
      </div>
      <div className="myroom-list__body">
        {myChatList?.map((room) => (
          <MyRoomPreiview key={room.chat_id} room={room} />
        ))}
      </div>
    </div>
  )
}

export default MyRoomListPage
