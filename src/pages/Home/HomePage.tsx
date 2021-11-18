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
      <div
        style={{
          display: "block",
          width: "100%",
          textAlign: "center",
          marginTop: "20px",
          padding: "20px",
          backgroundColor: "rgb(210,210,210)",
        }}
      >
        <div style={{ marginBottom: "20px" }}>
          아이디 비밀번호 아무거나 눌러도{" "}
        </div>
        <div>로그인 됩니다.</div>
      </div>
    </div>
  )
}

export default HomePage
