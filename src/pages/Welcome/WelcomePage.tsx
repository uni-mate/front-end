import React, { useEffect } from "react"
import Carousel from "react-material-ui-carousel"
import { useHistory } from "react-router"

import welcome1 from "../../assets/welcome/welcome1.png"
import welcome2 from "../../assets/welcome/welcome2.png"
import welcome3 from "../../assets/welcome/welcome3.png"
import welcome4 from "../../assets/welcome/welcome4.png"

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
      <Carousel
        fullHeightHover={false}
        className="welcome__desc"
        autoPlay={false}
        animation={"fade"}
        cycleNavigation={false}
        navButtonsAlwaysVisible={true}
        swipe={true}
        timeout={300}
        indicators={true}
        NextIcon="next" // Change the "inside" of the next button to "next"
        PrevIcon="prev"
        indicatorContainerProps={{
          style: {
            display: "inline",
            position: "absolute",
            width: "150px",
            bottom: "40px",
            left: "50%",
            transform: "translateX(-50%)",
          },
        }}
        indicatorIconButtonProps={{
          style: {
            backgroundColor: "rgba(220,220,220)",
            pointerEvents: "none",
            marginRight: "10px",
            width: "10px",
            height: "10px",
          },
        }}
        activeIndicatorIconButtonProps={{
          style: {
            backgroundColor: "var(--main-color)",
            padding: "0px 10px",
            borderRadius: "4px",
          },
        }}
        navButtonsWrapperProps={{
          style: {
            bottom: "0",
            top: "unset",
          },
        }}
        navButtonsProps={{
          style: {
            position: "absolute",
            bottom: "0px",
            backgroundColor: "#fff",
          },
        }}
      >
        <div className="welcome__carousel-1">
          <img src={welcome1} alt="welcome" />
          <div>
            <div className="welcome__title">안녕, 나는 몽지에요!</div>
            <span style={{ display: "block" }}>오랫동안 열리지 않던</span>
            <span>문틈의 먼지가 쌓여 탄생했어요.</span>
          </div>
        </div>
        <div className="welcome__carousel-2">
          <img src={welcome2} alt="welcome" />
          <div>
            <div className="welcome__title">
              문안에는 대학생이 살고 있나 봐요!
            </div>
            <span>아직 친구가 없는 모양인데...</span>
          </div>
        </div>
        <div className="welcome__carousel-3">
          <img src={welcome3} alt="welcome" />
          <div>
            <div className="welcome__title" style={{ marginBottom: "10px" }}>
              자기랑 잘 맞는 친구만이
            </div>
            <div className="welcome__title">문을 열 수 있다나 뭐라나~</div>
          </div>
        </div>
        <div className="welcome__carousel-4">
          <img src={welcome4} alt="welcome" />
          <div>
            <div className="welcome__title">
              아무튼, 몽지는 문 안이 궁금해요!
            </div>
            <span>당신이라면... 문을 열 수 있을지도...?</span>
          </div>
          <div className="app__start" onClick={() => history.push("/room")}>
            유니메이트 시작하기
          </div>
        </div>
      </Carousel>
    </div>
  )
}

export default WelcomePage
