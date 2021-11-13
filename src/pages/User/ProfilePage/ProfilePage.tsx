import React from "react"
import { UserState } from "../../../types/types"

import "./ProfilePage.css"

interface Props {
  currentUser: UserState
}

const ProfilePage = ({ currentUser }: Props) => {
  return (
    <div className="profile-container">
      <div className="profile__header">
        <span className="profile__header--title">내 정보</span>
      </div>
      <div className="profile__info">
        <div className="profile__info--image">
          {/* 예시 */}
          <div className="profile__image"></div>
          {/* <img src="" alt="" /> */}
        </div>
        <div className="profile__info--desc">
          <span className="profile__info--username">
            {currentUser.nickname}님
          </span>
          <span className="profile__info--department">컴퓨터 공학과</span>
          <span className="profile__info--name">{currentUser.username}</span>
        </div>
      </div>
      <div className="profile__body">
        <div className="profile__button">
          <div className="profile__button--title">프로필 수정</div>
          <div className="profile__button--arrow">다음</div>
        </div>
        <div className="profile__button">
          <div className="profile__button--title">계정</div>
          <div className="profile__button--arrow">다음</div>
        </div>
        <div className="profile__button">
          <div className="profile__button--title">알림설정</div>
          <div className="profile__button--arrow">다음</div>
        </div>
        <div className="profile__button">
          <div className="profile__button--title">이용안내</div>
          <div className="profile__button--arrow">다음</div>
        </div>
        <div className="profile__button">
          <div className="profile__button--title">로그아웃</div>
          <div className="profile__button--arrow">다음</div>
        </div>
        <div className="profile__button">
          <div className="profile__button--title">회원탈퇴</div>
          <div className="profile__button--arrow">다음</div>
        </div>
      </div>
    </div>
  )
}

export default ProfilePage
