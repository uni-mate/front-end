import React, { Fragment, useEffect, useState } from "react"
import { UserState } from "../../../types/UserTypes"

import Menu from "../../../assets/icons/createroom/arrow.png"
import me from "../../../assets/me/me.jpg"
import useNavbar from "../../../hooks/useNavbar"

import p1 from "../../../assets/profileImage/p1.png"
import p2 from "../../../assets/profileImage/p2.png"
import p3 from "../../../assets/profileImage/p3.png"

import "./ProfilePage.css"
import { useHistory } from "react-router"

interface Props {
  currentUser: UserState
  logouthandler: () => void
}

const getProfileImg = (name: string) => {
  if (name === "고니") {
    return p1
  } else if (name === "아이유") {
    return p2
  } else if (name === "조이") {
    return p3
  }
}

const ProfilePage = ({ currentUser, logouthandler }: Props) => {
  const [image, setImage] = useState<string>()
  useEffect(() => {
    setImage(getProfileImg(currentUser.username))
  }, [currentUser.username])
  const [navbarInSide] = useNavbar()
  const history = useHistory()
  useEffect(() => {
    navbarInSide()
  }, [navbarInSide])
  return (
    <Fragment>
      <div className="profile-container">
        <div className="profile__header">
          <span className="profile__header--title">내 정보</span>
        </div>
        <div className="profile__info">
          <div
            className="profile__info--image"
            onClick={() => history.push("profile/custom")}
          >
            <img src={image} alt="profile" />
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
            <div className="profile__button--arrow">
              <img src={Menu} alt="" />
            </div>
          </div>
          <div className="profile__button">
            <div className="profile__button--title">계정</div>
            <div className="profile__button--arrow">
              <img src={Menu} alt="" />
            </div>
          </div>
          <div className="profile__button">
            <div className="profile__button--title">알림설정</div>
            <div className="profile__button--arrow">
              <img src={Menu} alt="" />
            </div>
          </div>
          <div className="profile__button">
            <div className="profile__button--title">이용안내</div>
            <div className="profile__button--arrow">
              <img src={Menu} alt="" />
            </div>
          </div>
          <div className="profile__button">
            <div className="profile__button--title">로그아웃</div>
            <div className="profile__button--arrow" onClick={logouthandler}>
              <img src={Menu} alt="" />
            </div>
          </div>
          <div className="profile__button">
            <div className="profile__button--title">회원탈퇴</div>
            <div className="profile__button--arrow">
              <img src={Menu} alt="" />
            </div>
            {/* <Link to="/signout" className="profile__button--arrow">
              <img src={Menu} alt="" />
            </Link> */}
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ProfilePage
