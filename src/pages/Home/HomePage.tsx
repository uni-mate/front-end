import React, { useEffect } from "react"
import useNavbar from "../../hooks/useNavbar"
import { useHistory } from "react-router"

import hello from "../../assets/createRoom/ready.png"

import CustomButton from "../../components/Partials/CustomButton/CustomButton"

import "./HomePage.css"

const HomePage = () => {
  const history = useHistory()
  const [, navbarOutSide] = useNavbar()
  useEffect(() => {
    navbarOutSide()
  }, [navbarOutSide])
  return (
    <div className="home__container">
      <div className="home__image">
        <img src={hello} alt="이미지" />
      </div>
      <div className="home__title">
        <span>안녕하세요!</span>
        <span>유니메이트에 오신걸 환영합니다.</span>
      </div>
      <div className="home_user">
        <CustomButton
          onClick={() => history.push("/auth/login")}
          width="70%"
          height="41px"
          inverse={true}
        >
          로그인
        </CustomButton>
        <CustomButton
          onClick={() => history.push("/auth/register")}
          width="70%"
          height="41px"
        >
          회원가입
        </CustomButton>
      </div>
    </div>
  )
}

export default HomePage
