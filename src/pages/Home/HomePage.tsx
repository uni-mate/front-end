import React, { useEffect } from "react"
import useNavbar from "../../hooks/useNavbar"
import { useHistory } from "react-router"

import moodan from "../../assets/무단복사.png"

import CustomButton from "../../components/Partials/CustomButton/CustomButton"
import { Link } from "react-router-dom"

import "./HomePage.css"

const HomePage = () => {
  const history = useHistory()
  const [, navbarOutSide] = useNavbar()
  useEffect(() => {
    navbarOutSide()
  }, [navbarOutSide])
  return (
    <div className="home-container">
      <div className="home__image">
        <img src={moodan} alt="이미지" />
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
      <Link
        to="/room"
        style={{
          display: "block",
          width: "100%",
          height: "20px",
          textAlign: "center",
          border: "1px solid black",
          marginTop: "20px",
          backgroundColor: "gray",
        }}
      >
        건너뛰기(임시)
      </Link>
    </div>
  )
}

export default HomePage
