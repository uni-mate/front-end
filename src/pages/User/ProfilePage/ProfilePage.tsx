import React, { Fragment, useEffect } from "react"
import { UserState } from "../../../types/types"
import { Link } from "react-router-dom"

import Menu from "../../../assets/icons/createroom/arrow.png"

import "./ProfilePage.css"
import useNavbar from "../../../hooks/useNavbar"
// import BasicModal from "../../../components/Partials/Modal/BasicModal"

interface Props {
  currentUser: UserState
  logouthandler: () => void
}

const ProfilePage = ({ currentUser, logouthandler }: Props) => {
  // const [isModalOpen, setIsModalOpen] = useState(false)
  const [navbarInSide] = useNavbar()
  useEffect(() => {
    navbarInSide()
  }, [navbarInSide])
  return (
    <Fragment>
      {/* {isModalOpen && (
        <BasicModal
          isModalOpen={isModalOpen}
          width="300px"
          height="500px"
          backgroundColor="#fff"
          boxShadow={24}
          padding="30px 20px"
        >
          <RoomModal chat={chat} closeModal={closeModal} />
        </BasicModal>
      )} */}
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
            <Link to="/signout" className="profile__button--arrow">
              <img src={Menu} alt="" />
            </Link>
          </div>
        </div>
      </div>
    </Fragment>
  )
}

export default ProfilePage
