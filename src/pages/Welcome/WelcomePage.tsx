import React, { useEffect } from "react"
import Carousel from "react-material-ui-carousel"
import { useHistory } from "react-router"

import hello from "../../assets/createRoom/ready.png"
import useNavbar from "./../../hooks/useNavbar"

import "./WelcomePage.css"

const WelcomePage = () => {
  const [, navbarOutside] = useNavbar()
  const history = useHistory()
  useEffect(() => {
    navbarOutside()
  }, [navbarOutside])
  return (
    <div className="welcome__container">
      <div className="welcome__img">
        <img src={hello} alt="" />
      </div>
      <Carousel
        className="welcome__desc"
        autoPlay={false}
        animation={"fade"}
        cycleNavigation={false}
        swipe={true}
        navButtonsAlwaysInvisible={true}
        timeout={300}
        indicators={true}
        indicatorContainerProps={{
          style: {
            position: "absolute",
            bottom: "0",
          },
        }}
        indicatorIconButtonProps={{
          style: {
            color: "rgba(220,220,220)",
            pointerEvents: "none",
            padding: "0px 5px",
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            color: "var(--main-color)",
          },
        }}
      >
        <div className="welcome__carousel">
          <div className="welcome__title">안녕하세요</div>
          <span>유니메이트에 오신걸 환영합니다.</span>
        </div>
        <div className="welcome__carousel">
          <div className="welcome__title">대학교 친구를 사귀어보세요!</div>
          <span>곧 대면 학기가 시작되는데 학교에 친구가 없다구요?</span>
          <span>유니메이트에서 마음 맞는 친구를 찾아보세요</span>
        </div>
        <div className="welcome__carousel">
          <div className="welcome__title">부담없이 대화를 나눠보세요!</div>
          <span>채팅방에서는 챗봇이 주제를 던져줄 거에요</span>
          <span>주제에 따라 즐겁고 부담없는 대화를 나누어보세요</span>

          <span></span>
        </div>
        <div className="welcome__carousel last">
          <div className="welcome__title">친구를 사귈 준비가 되었나요?</div>
          <span>그렇다면 우리 함께 친구를 사귀러 가보아요~</span>
          <div className="app__start" onClick={() => history.push("/room")}>
            유니메이트 시작하기
          </div>
        </div>
      </Carousel>
    </div>
  )
}

export default WelcomePage
