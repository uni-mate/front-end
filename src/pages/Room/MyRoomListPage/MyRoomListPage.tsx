import React, { useEffect } from "react"
import MyRoomPreiview from "../../../components/Room/MyRoomPreview/MyRoomPreiview"
import SearchIcon from "../../../assets/icons/attr/search.png"
import useNavbar from "../../../hooks/useNavbar"
import { ChatType } from "../../../types/ChatTypes"

import "./MyRoomListPage.css"

interface Props {
  userName: string
  myChatList: ChatType[]
  fetchMyChatHandler: () => void
  fetchMyChatHandler2: () => void
  fetchMyChatHandler3: () => void
}

const MyRoomListPage = ({
  userName,
  myChatList,
  fetchMyChatHandler,
  fetchMyChatHandler2,
  fetchMyChatHandler3,
}: Props) => {
  const [navbarInside] = useNavbar()
  useEffect(() => {
    if (userName === "고니") {
      fetchMyChatHandler()
    } else if (userName === "조이") {
      fetchMyChatHandler2()
    } else if (userName === "아이유") {
      fetchMyChatHandler3()
    }
    navbarInside()
  }, [
    fetchMyChatHandler,
    fetchMyChatHandler2,
    fetchMyChatHandler3,
    navbarInside,
    userName,
  ])
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
