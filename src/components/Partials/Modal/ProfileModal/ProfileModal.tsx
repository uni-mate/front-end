import React from "react"

import "./ProfileModal.css"

interface Props {
  profileImg: string
  name: string
  desc: string
  faculty?: string
  closeModal: () => void
}

const ProfileModal = ({
  profileImg,
  name,
  desc,
  faculty,
  closeModal,
}: Props) => {
  return (
    <div className="profilemodal__container">
      <div className="profilemodal__profile">
        <div className="profilemodal__profile--pic">
          <img src={profileImg} alt="프로필" />
        </div>
        <div className="profilemodal__profile--name">{name}</div>
        <div className="profilemodal__profile--faculty">{faculty}</div>
      </div>
      <div className="profilemodal__desc">{desc}</div>
      <div className="profilemodal__button">
        <button>신고하기</button>
        <button onClick={closeModal}>창닫기</button>
      </div>
    </div>
  )
}

export default ProfileModal
