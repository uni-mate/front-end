import React, { useEffect } from "react"
import MyRoomPreiview from "../../../components/Room/MyRoomPreview/MyRoomPreiview"
import SearchIcon from "../../../assets/icons/attr/search.png"

import "./MyRoomListPage.css"
import useNavbar from "../../../hooks/useNavbar"

const myRoomList = [
  {
    roomid: "r1",
    title: "29일 저녁 맘스터치 같이 드실분!",
    userList: [],
  },
  {
    roomid: "r2",
    title: "29일 저녁 맘스터치 같이 드실분!",
    userList: [],
  },
  {
    roomid: "r3",
    title: "29일 저녁 맘스터치 같이 드실분!",
    userList: [],
  },
  {
    roomid: "r4",
    title: "29일 저녁 맘스터치 같이 드실분!",
    userList: [],
  },
  {
    roomid: "r5",
    title: "29일 저녁 맘스터치 같이 드실분!",
    userList: [],
  },
  {
    roomid: "r6",
    title: "29일 저녁 맘스터치 같이 드실분!",
    userList: [],
  },
  {
    roomid: "r7",
    title: "29일 저녁 맘스터치 같이 드실분!",
    userList: [],
  },
]

const MyRoomListPage = () => {
  const [navbarInside] = useNavbar()
  useEffect(() => {
    navbarInside()
  }, [navbarInside])
  return (
    <div className="myroom-list">
      <div className="myroom-list__header">
        <span className="myroom-list__header--title">채팅</span>
        <div className="myroom__search-icon">
          <img src={SearchIcon} alt="search" />
        </div>
      </div>
      <div className="myroom-list__body">
        {myRoomList.map((room) => (
          <MyRoomPreiview key={room.roomid} room={room} />
        ))}
      </div>
    </div>
  )
}

export default MyRoomListPage
