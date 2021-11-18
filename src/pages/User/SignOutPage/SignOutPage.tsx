import React, { useEffect } from "react"
import { useHistory } from "react-router"
import CustomButton from "../../../components/Partials/CustomButton/CustomButton"
import useNavbar from "../../../hooks/useNavbar"
import ArrowBackIcon from "../../../assets/icons/attr/goback.png"
import hello from "../../../assets/createRoom/ready.png"

import "./SignOutPage.css"

const SignOutPage = () => {
  const history = useHistory()
  const [, navbarOutSide] = useNavbar()
  const prevPageHandler = () => {
    history.goBack()
  }
  useEffect(() => {
    navbarOutSide()
  }, [navbarOutSide])
  return (
    <div className="signout-container">
      <div className="signout__header">
        <div className="signout__header--icon" onClick={prevPageHandler}>
          <img src={ArrowBackIcon} alt="" />
        </div>
        <span className="signout__header--title">회원탈퇴</span>
      </div>
      <div className="signout__image">
        <img src={hello} alt="이미지" />
      </div>
      <div className="signout__title">
        <span>정말 탈퇴하시겠어요?</span>
        <span>지금 탈퇴하시면 회원님의</span>
        <span>모든 채팅목록이 사라져요</span>
      </div>
      <div className="signout_user">
        <CustomButton
          onClick={() => history.push("/auth/login")}
          width="155px"
          height="33px"
          color="#fff"
        >
          로그인
        </CustomButton>
        <CustomButton
          onClick={() => history.push("/auth/register")}
          width="155px"
          height="33px"
          color="var(--main-text-color)"
          inverse={true}
        >
          회원가입
        </CustomButton>
      </div>
    </div>
  )
}

export default SignOutPage
