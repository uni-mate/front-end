import React, { useEffect } from "react"
import ArrowForwardIcon from "@mui/icons-material/ArrowForward"
import { useHistory } from "react-router"
import useNavbar from "../../../hooks/useNavbar"

import "./CreateRoomPage.css"

const CreateRoomPage = () => {
  const history = useHistory()
  const [navbarInside, navbarOutside] = useNavbar()

  useEffect(() => {
    navbarInside()
  }, [navbarInside])
  return (
    <div className="create">
      <div className="create-header">
        <span className="create-header__title">방 만들기</span>
      </div>
      <div className="create__content">
        <img src="/images/filter-icon.png" alt="먼지!" />
        <span>방을 만들러 가볼까요?</span>
        <ArrowForwardIcon
          className="create__content--icon"
          onClick={() => history.push("/room/create/detail")}
        />
      </div>
    </div>
  )
}

export default CreateRoomPage
