import React, { useEffect } from "react"
import { useHistory } from "react-router"
import useNavbar from "../../../hooks/useNavbar"
import BackArrow from "../../../assets/icons/attr/goback.png"
import bgImg from "../../../assets/icons/createroom/빼꼼이.png"
import Carousel from "react-material-ui-carousel"

import ChatTypeContainer from "./../../../components/Room/CreateRoomComponents/ChatType/ChatTypeContainer"
import PurposeContainer from "../../../components/Room/CreateRoomComponents/Purpose/PurposeContainer"

// import GradeContainer from "../../../components/Room/CreateRoomComponents/Grade/GradeContainer"
// import HeadCountContainer from "../../../components/Room/CreateRoomComponents/HeadCount/HeadCountContainer"
// import GenderContainer from "../../../components/Room/CreateRoomComponents/Gender/GenderContainer"
// import CommonTypeContainer from "../../../components/Room/CreateRoomComponents/CommonType/CommonTypeContainer"
// import RoomTitleContainer from "../../../components/Room/CreateRoomComponents/RoomTitle/RoomTitleContainer"
// import RoomDescContainer from "../../../components/Room/CreateRoomComponents/RoomDesc/RoomDescContainer"

import "./CreateRoomDetailPage.css"

const CreateRoomDetailPage = () => {
  const history = useHistory()
  const [navbarInside, navbarOutside] = useNavbar()

  const nextPageHandler = () => {
    history.push("/room/create")
    navbarInside()
  }
  useEffect(() => {
    navbarOutside()
  }, [navbarOutside])

  const prevPageHandler = () => {
    history.goBack()
    navbarInside()
  }
  return (
    <div className="create-detail">
      <div className="create-detail__header">
        <div onClick={prevPageHandler}>
          <img src={BackArrow} alt="arrow" />
        </div>
      </div>
      <div className="create-detail__body">
        <div className="create-detail__body--img">
          <img src={bgImg} alt="backimg" />
        </div>
        <div className="create-detail__components">
          <Carousel
            autoPlay={false}
            animation={"fade"}
            cycleNavigation={false}
            swipe={false}
            indicators={false}
            navButtonsAlwaysVisible={true}
            className="create-detail__components--carousel"
          >
            <ChatTypeContainer />
            <PurposeContainer />
            <div>hello!</div>
            {/* <GradeContainer /> */}
            {/* <HeadCountContainer /> */}
            {/* <GenderContainer /> */}
            {/* <CommonTypeContainer /> */}
            {/* <RoomTitleContainer /> */}
            {/* <RoomDescContainer /> */}
          </Carousel>
        </div>
      </div>
    </div>
  )
}

export default CreateRoomDetailPage
