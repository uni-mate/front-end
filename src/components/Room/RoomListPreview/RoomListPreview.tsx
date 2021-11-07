import React from "react"

import "./RoomListPreview.css"

interface RoomInfo {
  roomid: string
  title: string
  userList: never[]
}

interface Props {
  roomInfo: RoomInfo
}

const RoomListPreview = ({ roomInfo }: Props) => {
  return <div className="container">{roomInfo.title}</div>
}

export default RoomListPreview
