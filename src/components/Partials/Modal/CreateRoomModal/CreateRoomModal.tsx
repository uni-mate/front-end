import React from "react"

import createLoading from "../../../../assets/createRoom/finish.png"

import "./CreateRoomModal.css"

const CreateRoomModal = () => {
  return (
    <div className="craetroom-modal">
      <img src={createLoading} alt="finish" />
      <div>뚝딱뚝딱!</div>
      <div>새로운 방을 짓고 있어요</div>
    </div>
  )
}

export default CreateRoomModal
