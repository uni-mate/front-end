import React from "react"

import createLoading from "../../../../assets/createRoom/finish.png"

import "./CreateRoomModal.css"

const CreateRoomModal = () => {
  return (
    <div className="craetroom-modal">
      <img src={createLoading} alt="finish" />
    </div>
  )
}

export default CreateRoomModal
